import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api/axiosInstance";
import type { Group, GroupMembership, User } from "../types";

export const useMyGroups = () => {
  return useQuery<Group[]>({
    queryKey: ["myGroups"],
    queryFn: async () => {
      const { data } = await api.get<Group[]>("/groups");
      return data;
    },
  });
};

export const useSearchGroups = (query: string) => {
  return useQuery<Group[]>({
    queryKey: ["searchGroups", query],
    queryFn: async () => {
      const { data } = await api.get<Group[]>("/groups/search", {
        params: { q: query },
      });
      return data;
    },
    enabled: query.length > 0,
  });
};

export const useGroupMembers = (groupId: number | null) => {
  return useQuery<GroupMembership[]>({
    queryKey: ["groupMembers", groupId],
    queryFn: async () => {
      const { data } = await api.get<GroupMembership[]>(
        `/groups/${groupId}/members`,
      );
      return data;
    },
    enabled: groupId !== null,
  });
};

export const useCreateGroup = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: { name?: string }) => {
      const { data } = await api.post<Group>("/groups", payload);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myGroups"] });
    },
  });
};

export const useDeleteGroup = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (groupId: number) => {
      await api.delete(`/groups/${groupId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myGroups"] });
    },
  });
};

export const useInviteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      groupId,
      email,
    }: {
      groupId: number;
      email: string;
    }) => {
      await api.post(`/groups/${groupId}/invite`, { email });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["groupMembers"] });
    },
  });
};

export const useRemoveMember = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      groupId,
      userId,
    }: {
      groupId: number;
      userId: number;
    }) => {
      await api.delete(`/groups/${groupId}/members/${userId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["groupMembers"] });
    },
  });
};

export const useSearchUsers = (query: string) => {
  return useQuery<User[]>({
    queryKey: ["searchUsers", query],
    queryFn: async () => {
      const { data } = await api.get<User[]>("/users/search", {
        params: { q: query },
      });
      return data;
    },
    enabled: query.length > 1,
  });
};
