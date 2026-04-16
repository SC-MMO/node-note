import React, { useState } from "react";
import { Modal, Input, Select, Tabs, message } from "antd";
import {
  useShareNoteWithUser,
  useShareNoteWithGroup,
} from "../../hooks/useNotes";
import { useMyGroups, useSearchUsers } from "../../hooks/useGroups";
import type { Note } from "../../types";

interface ShareNoteModalProps {
  open: boolean;
  onClose: () => void;
  note: Note | null;
}

const ShareNoteModal: React.FC<ShareNoteModalProps> = ({
  open,
  onClose,
  note,
}) => {
  const [userSearch, setUserSearch] = useState("");
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [selectedGroupId, setSelectedGroupId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("user");

  const { data: groups } = useMyGroups();
  const { data: users } = useSearchUsers(userSearch);
  const shareWithUser = useShareNoteWithUser();
  const shareWithGroup = useShareNoteWithGroup();

  const handleShare = () => {
    if (!note) return;
    if (activeTab === "user" && selectedUserId) {
      shareWithUser.mutate(
        { noteId: note.noteId, userId: selectedUserId },
        {
          onSuccess: () => {
            message.success("Shared with user");
            onClose();
          },
        },
      );
    } else if (activeTab === "group" && selectedGroupId) {
      shareWithGroup.mutate(
        { noteId: note.noteId, groupId: selectedGroupId },
        {
          onSuccess: () => {
            message.success("Shared with group");
            onClose();
          },
        },
      );
    }
  };

  return (
    <Modal
      title={`Share: ${note?.title ?? ""}`}
      open={open}
      onCancel={onClose}
      onOk={handleShare}
      confirmLoading={shareWithUser.isPending || shareWithGroup.isPending}
      okText="Share"
      styles={{
        content: { background: "#161b22", border: "1px solid #30363d" },
        header: { background: "#161b22", color: "#e6edf3" },
      }}
    >
      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        items={[
          {
            key: "user",
            label: "Share with User",
            children: (
              <div>
                <Input
                  placeholder="Search users by email..."
                  value={userSearch}
                  onChange={(e) => setUserSearch(e.target.value)}
                  style={{
                    background: "#0d1117",
                    border: "1px solid #30363d",
                    color: "#e6edf3",
                    marginBottom: 12,
                  }}
                  styles={{
                    input: { color: "#e6edf3", background: "transparent" },
                  }}
                />
                <Select
                  placeholder="Select user"
                  value={selectedUserId}
                  onChange={(value: number) => setSelectedUserId(value)}
                  options={
                    users?.map((u) => ({
                      label: `${u.username} (${u.email})`,
                      value: u.userId,
                    })) ?? []
                  }
                  style={{ width: "100%" }}
                />
              </div>
            ),
          },
          {
            key: "group",
            label: "Share with Group",
            children: (
              <Select
                placeholder="Select group"
                value={selectedGroupId}
                onChange={(value: number) => setSelectedGroupId(value)}
                options={
                  groups?.map((g) => ({
                    label: `Group #${g.groupId}`,
                    value: g.groupId,
                  })) ?? []
                }
                style={{ width: "100%" }}
              />
            ),
          },
        ]}
      />
    </Modal>
  );
};

export default ShareNoteModal;
