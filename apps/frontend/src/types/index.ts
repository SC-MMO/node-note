export interface User {
  userId: number;
  username: string;
  email: string;
}

export interface Note {
  noteId: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  authorId: number;
  author?: User;
}

export interface Group {
  groupId: number;
  ownerId: number;
  owner?: User;
  memberships?: GroupMembership[];
}

export interface GroupMembership {
  userId: number;
  groupId: number;
  user?: User;
  group?: Group;
}

export interface GroupAccess {
  groupId: number;
  noteId: number;
  group?: Group;
  note?: Note;
}

export interface UserAccess {
  userId: number;
  noteId: number;
  user?: User;
  note?: Note;
}

export interface CreateNotePayload {
  title: string;
  content: string;
}

export interface UpdateNotePayload {
  title?: string;
  content?: string;
}

export interface CreateGroupPayload {
  name?: string;
}

export interface ShareNotePayload {
  noteId: number;
  userId?: number;
  groupId?: number;
}
