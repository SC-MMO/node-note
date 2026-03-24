import { Response } from "express";
import prisma from "../lib/prisma";
import { AuthRequest } from "../middleware/auth.middleware";

export const getMyNotes = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const notes = await prisma.note.findMany({
      where: { authorId: req.userId },
      orderBy: { updatedAt: "desc" },
    });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch notes" });
  }
};

export const getGroupNotes = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const memberships = await prisma.groupMembership.findMany({
      where: { userId: req.userId },
      select: { groupId: true },
    });
    const groupIds = memberships.map((m) => m.groupId);

    const groupAccesses = await prisma.groupAccess.findMany({
      where: { groupId: { in: groupIds } },
      include: {
        note: {
          include: {
            author: { select: { userId: true, username: true, email: true } },
          },
        },
      },
    });

    const notes = groupAccesses.map((ga) => ga.note);
    const unique = Array.from(
      new Map(notes.map((n) => [n.noteId, n])).values(),
    );

    res.json(unique);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch group notes" });
  }
};

export const getSharedNotes = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const accesses = await prisma.userAccess.findMany({
      where: { userId: req.userId },
      include: {
        note: {
          include: {
            author: { select: { userId: true, username: true, email: true } },
          },
        },
      },
    });

    const notes = accesses.map((a) => a.note);
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch shared notes" });
  }
};

export const searchNotes = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const q = req.query.q as string;
    if (!q) {
      res.json([]);
      return;
    }

    const notes = await prisma.note.findMany({
      where: {
        authorId: req.userId,
        OR: [
          { title: { contains: q, mode: "insensitive" } },
          { content: { contains: q, mode: "insensitive" } },
        ],
      },
      orderBy: { updatedAt: "desc" },
    });

    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: "Search failed" });
  }
};

export const createNote = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const { title, content } = req.body as { title: string; content: string };

    const note = await prisma.note.create({
      data: {
        title,
        content,
        authorId: req.userId!,
      },
    });

    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ error: "Failed to create note" });
  }
};

export const updateNote = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const rawId = req.params.id;
    const noteId = parseInt(Array.isArray(rawId) ? rawId[0] : rawId);
    const { title, content } = req.body as { title?: string; content?: string };

    const existing = await prisma.note.findUnique({ where: { noteId } });
    if (!existing) {
      res.status(404).json({ error: "Note not found" });
      return;
    }

    const isAuthor = existing.authorId === req.userId;
    const hasUserAccess = await prisma.userAccess.findUnique({
      where: { userId_noteId: { userId: req.userId!, noteId } },
    });

    if (!isAuthor && !hasUserAccess) {
      const memberships = await prisma.groupMembership.findMany({
        where: { userId: req.userId },
        select: { groupId: true },
      });
      const groupIds = memberships.map((m) => m.groupId);
      const groupAccess = await prisma.groupAccess.findFirst({
        where: { noteId, groupId: { in: groupIds } },
      });
      if (!groupAccess) {
        res.status(403).json({ error: "No access to this note" });
        return;
      }
    }

    const data: { title?: string; content?: string } = {};
    if (title !== undefined) data.title = title;
    if (content !== undefined) data.content = content;

    const note = await prisma.note.update({
      where: { noteId },
      data,
    });

    res.json(note);
  } catch (err) {
    res.status(500).json({ error: "Failed to update note" });
  }
};

export const deleteNote = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const rawId = req.params.id;
    const noteId = parseInt(Array.isArray(rawId) ? rawId[0] : rawId);

    const note = await prisma.note.findUnique({ where: { noteId } });
    if (!note || note.authorId !== req.userId) {
      res.status(403).json({ error: "Not authorized" });
      return;
    }

    await prisma.$transaction([
      prisma.userAccess.deleteMany({ where: { noteId } }),
      prisma.groupAccess.deleteMany({ where: { noteId } }),
      prisma.note.delete({ where: { noteId } }),
    ]);

    res.json({ message: "Note deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete note" });
  }
};

export const shareNoteWithUser = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const rawId = req.params.id;
    const noteId = parseInt(Array.isArray(rawId) ? rawId[0] : rawId);
    const { userId } = req.body as { userId: number };

    const note = await prisma.note.findUnique({ where: { noteId } });
    if (!note || note.authorId !== req.userId) {
      res.status(403).json({ error: "Not authorized" });
      return;
    }

    await prisma.userAccess.upsert({
      where: { userId_noteId: { userId, noteId } },
      create: { userId, noteId },
      update: {},
    });

    res.json({ message: "Note shared with user" });
  } catch (err) {
    res.status(500).json({ error: "Failed to share note" });
  }
};

export const shareNoteWithGroup = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const rawId = req.params.id;
    const noteId = parseInt(Array.isArray(rawId) ? rawId[0] : rawId);
    const { groupId } = req.body as { groupId: number };

    const note = await prisma.note.findUnique({ where: { noteId } });
    if (!note || note.authorId !== req.userId) {
      res.status(403).json({ error: "Not authorized" });
      return;
    }

    await prisma.groupAccess.upsert({
      where: { groupId_noteId: { groupId, noteId } },
      create: { groupId, noteId },
      update: {},
    });

    res.json({ message: "Note shared with group" });
  } catch (err) {
    res.status(500).json({ error: "Failed to share note" });
  }
};
