import React, { useState } from "react";
import { Modal, Input } from "antd";
import { useCreateNote } from "../../hooks/useNotes";
import type { Note } from "../../types";

interface CreateNoteModalProps {
  open: boolean;
  onClose: () => void;
  onCreated: (note: Note) => void;
}

const CreateNoteModal: React.FC<CreateNoteModalProps> = ({
  open,
  onClose,
  onCreated,
}) => {
  const [title, setTitle] = useState("");
  const createNote = useCreateNote();

  const handleCreate = () => {
    createNote.mutate(
      { title: title || "Untitled", content: "" },
      {
        onSuccess: (note) => {
          setTitle("");
          onCreated(note);
        },
      },
    );
  };

  return (
    <Modal
      title="Create New Note"
      open={open}
      onCancel={onClose}
      onOk={handleCreate}
      confirmLoading={createNote.isPending}
      okText="Create"
      styles={{
        content: { background: "#161b22", border: "1px solid #30363d" },
        header: { background: "#161b22", color: "#e6edf3" },
      }}
    >
      <Input
        placeholder="Enter note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onPressEnter={handleCreate}
        style={{
          background: "#0d1117",
          border: "1px solid #30363d",
          color: "#e6edf3",
        }}
        styles={{ input: { color: "#e6edf3", background: "transparent" } }}
      />
    </Modal>
  );
};

export default CreateNoteModal;
