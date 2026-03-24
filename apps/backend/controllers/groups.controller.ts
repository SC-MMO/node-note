import { Response } from "express";
import prisma from "../lib/prisma";
import { AuthRequest } from "../middleware/auth.middleware";

export const getMyGroups = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const owned = await prisma.group.findMany({
      where: { ownerId: req.userId },
      include: {
        owner: { select: { userId: true, username: true, email: true } },
      },
    });

    const memberships = await prisma.groupMembership.findMany({
      where: { userId: req.userId },
      include: {
        group: {
          include: {
            owner: { select: { userId: true, username: true, email: true } },
          },
        },
      },
    });

    const memberGroups = memberships.map((m) => m.group);
    const allGroups = [...owned, ...memberGroups];
    const unique = Array.from(
      new Map(allGroups.map((g) => [g.groupId, g])).values(),
    );

    res.json(unique);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch groups" });
  }
};

export const searchGroups = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const q = req.query.q as string;
    if (!q) {
      res.json([]);
      return;
    }

    const groups = await prisma.group.findMany({
      where: {
        owner: {
          username: { contains: q, mode: "insensitive" },
        },
      },
      include: {
        owner: { select: { userId: true, username: true, email: true } },
      },
      take: 20,
    });

    res.json(groups);
  } catch (err) {
    res.status(500).json({ error: "Search failed" });
  }
};

export const getGroupMembers = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const rawId = req.params.id;
    const groupId = parseInt(Array.isArray(rawId) ? rawId[0] : rawId);

    const members = await prisma.groupMembership.findMany({
      where: { groupId },
      include: {
        user: { select: { userId: true, username: true, email: true } },
      },
    });

    res.json(members);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch members" });
  }
};

export const createGroup = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const group = await prisma.group.create({
      data: { ownerId: req.userId! },
      include: {
        owner: { select: { userId: true, username: true, email: true } },
      },
    });

    await prisma.groupMembership.create({
      data: { userId: req.userId!, groupId: group.groupId },
    });

    res.status(201).json(group);
  } catch (err) {
    res.status(500).json({ error: "Failed to create group" });
  }
};

export const deleteGroup = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const rawId = req.params.id;
    const groupId = parseInt(Array.isArray(rawId) ? rawId[0] : rawId);

    const group = await prisma.group.findUnique({ where: { groupId } });
    if (!group || group.ownerId !== req.userId) {
      res.status(403).json({ error: "Not authorized" });
      return;
    }

    await prisma.$transaction([
      prisma.groupAccess.deleteMany({ where: { groupId } }),
      prisma.groupMembership.deleteMany({ where: { groupId } }),
      prisma.group.delete({ where: { groupId } }),
    ]);

    res.json({ message: "Group deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete group" });
  }
};

export const inviteUser = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const rawId = req.params.id;
    const groupId = parseInt(Array.isArray(rawId) ? rawId[0] : rawId);

    const { email } = req.body as { email: string };

    const group = await prisma.group.findUnique({ where: { groupId } });
    if (!group || group.ownerId !== req.userId) {
      res.status(403).json({ error: "Not authorized" });
      return;
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    const existing = await prisma.groupMembership.findUnique({
      where: { userId_groupId: { userId: user.userId, groupId } },
    });
    if (existing) {
      res.status(400).json({ error: "User already a member" });
      return;
    }

    await prisma.groupMembership.create({
      data: { userId: user.userId, groupId },
    });

    res.json({ message: "User invited" });
  } catch (err) {
    res.status(500).json({ error: "Failed to invite user" });
  }
};

export const removeMember = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    let rawId = req.params.id;
    const groupId = parseInt(Array.isArray(rawId) ? rawId[0] : rawId);

    rawId = req.params.userId;
    const userId = parseInt(Array.isArray(rawId) ? rawId[0] : rawId);

    const group = await prisma.group.findUnique({ where: { groupId } });
    if (!group || group.ownerId !== req.userId) {
      res.status(403).json({ error: "Not authorized" });
      return;
    }

    if (userId === req.userId) {
      res.status(400).json({ error: "Cannot remove yourself as owner" });
      return;
    }

    await prisma.groupMembership.delete({
      where: { userId_groupId: { userId, groupId } },
    });

    res.json({ message: "Member removed" });
  } catch (err) {
    res.status(500).json({ error: "Failed to remove member" });
  }
};
