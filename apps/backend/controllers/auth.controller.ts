import { Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma';
import { AuthRequest, JWT_SECRET } from '../middleware/auth.middleware';

export const register = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { username, email, password } = req.body as {
      username: string;
      email: string;
      password: string;
    };

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      res.status(400).json({ error: 'Email already in use' });
      return;
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { username, email, password: hashed },
    });

    const token = jwt.sign({ userId: user.userId }, JWT_SECRET, { expiresIn: '7d' });

    res.cookie('token', token, { httpOnly: true, sameSite: 'lax', maxAge: 7 * 24 * 60 * 60 * 1000 });
    res.json({ userId: user.userId, username: user.username, email: user.email, token });
  } catch (err) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

export const login = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body as { email: string; password: string };

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    const token = jwt.sign({ userId: user.userId }, JWT_SECRET, { expiresIn: '7d' });

    res.cookie('token', token, { httpOnly: true, sameSite: 'lax', maxAge: 7 * 24 * 60 * 60 * 1000 });
    res.json({ userId: user.userId, username: user.username, email: user.email, token });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
};

export const getMe = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const user = await prisma.user.findUnique({
      where: { userId: req.userId },
      select: { userId: true, username: true, email: true },
    });

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

export const updateMe = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body as { username?: string; password?: string };

    const data: { username?: string; password?: string } = {};
    if (username) data.username = username;
    if (password) data.password = await bcrypt.hash(password, 10);

    const user = await prisma.user.update({
      where: { userId: req.userId },
      data,
      select: { userId: true, username: true, email: true },
    });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Update failed' });
  }
};

export const updateEmail = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { email } = req.body as { email: string };

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing && existing.userId !== req.userId) {
      res.status(400).json({ error: 'Email already in use' });
      return;
    }

    const user = await prisma.user.update({
      where: { userId: req.userId },
      data: { email },
      select: { userId: true, username: true, email: true },
    });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Email update failed' });
  }
};

export const deleteMe = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    await prisma.$transaction([
      prisma.userAccess.deleteMany({ where: { userId: req.userId } }),
      prisma.groupMembership.deleteMany({ where: { userId: req.userId } }),
      prisma.groupAccess.deleteMany({
        where: { group: { ownerId: req.userId } },
      }),
      prisma.group.deleteMany({ where: { ownerId: req.userId } }),
      prisma.note.deleteMany({ where: { authorId: req.userId } }),
      prisma.user.delete({ where: { userId: req.userId } }),
    ]);

    res.clearCookie('token');
    res.json({ message: 'Account deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Delete failed' });
  }
};

export const logout = async (_req: AuthRequest, res: Response): Promise<void> => {
  res.clearCookie('token');
  res.json({ message: 'Logged out' });
};
