import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api/axiosInstance";
import type {
  Note,
  CreateNotePayload,
  UpdateNotePayload,
  ShareNotePayload,
} from "../types";

export const useMyNotes = () => {
  return useQuery<Note[]>({
    queryKey: ["myNotes"],
    queryFn: async () => {
      const { data } = await api.get<Note[]>("/notes");
      return data;
    },
  });
};

export const useGroupNotes = () => {
  return useQuery<Note[]>({
    queryKey: ["groupNotes"],
    queryFn: async () => {
      const { data } = await api.get<Note[]>("/notes/group");
      return data;
    },
  });
};

export const useSharedNotes = () => {
  return useQuery<Note[]>({
    queryKey: ["sharedNotes"],
    queryFn: async () => {
      const { data } = await api.get<Note[]>("/notes/shared");
      return data;
    },
  });
};

export const useSearchNotes = (query: string) => {
  return useQuery<Note[]>({
    queryKey: ["searchNotes", query],
    queryFn: async () => {
      const { data } = await api.get<Note[]>("/notes/search", {
        params: { q: query },
      });
      return data;
    },
    enabled: query.length > 0,
  });
};

export const useCreateNote = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: CreateNotePayload) => {
      const { data } = await api.post<Note>("/notes", payload);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myNotes"] });
    },
  });
};

export const useUpdateNote = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      noteId,
      payload,
    }: {
      noteId: number;
      payload: UpdateNotePayload;
    }) => {
      const { data } = await api.put<Note>(`/notes/${noteId}`, payload);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myNotes"] });
      queryClient.invalidateQueries({ queryKey: ["groupNotes"] });
      queryClient.invalidateQueries({ queryKey: ["sharedNotes"] });
    },
  });
};

export const useDeleteNote = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (noteId: number) => {
      await api.delete(`/notes/${noteId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myNotes"] });
    },
  });
};

export const useShareNoteWithUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: ShareNotePayload) => {
      await api.post(`/notes/${payload.noteId}/share/user`, {
        userId: payload.userId,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sharedNotes"] });
    },
  });
};

export const useShareNoteWithGroup = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: ShareNotePayload) => {
      await api.post(`/notes/${payload.noteId}/share/group`, {
        groupId: payload.groupId,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["groupNotes"] });
    },
  });
};
