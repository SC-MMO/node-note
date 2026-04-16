import React, { useCallback, useEffect, useRef } from "react";
import { Input } from "antd";
import SaveIcon from "@mui/icons-material/Save";
import CodeIcon from "@mui/icons-material/Code";
import { IconButton, Tooltip } from "@mui/material";
import { useUpdateNote, useCreateNote } from "../../hooks/useNotes";
import type { Note } from "../../types";

const { TextArea } = Input;

interface MarkdownEditorProps {
  content: string;
  title: string;
  onContentChange: (content: string) => void;
  onTitleChange: (title: string) => void;
  note: Note | null;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
  content,
  title,
  onContentChange,
  onTitleChange,
  note,
}) => {
  const updateNote = useUpdateNote();
  const createNote = useCreateNote();
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSave = useCallback(() => {
    if (note) {
      updateNote.mutate({ noteId: note.noteId, payload: { title, content } });
    } else if (title || content) {
      createNote.mutate({ title: title || "Untitled", content });
    }
  }, [note, title, content, updateNote, createNote]);

  useEffect(() => {
    if (!note) return;
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(() => {
      updateNote.mutate({ noteId: note.noteId, payload: { title, content } });
    }, 2000);
    return () => {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    };
  }, [content, title]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "6px 12px",
          background: "#161b22",
          borderBottom: "1px solid #30363d",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <CodeIcon sx={{ color: "#58a6ff", fontSize: 16 }} />
          <span style={{ color: "#e6edf3", fontSize: 13, fontWeight: 600 }}>
            Editor
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Tooltip title="Save">
            <IconButton size="small" onClick={handleSave}>
              <SaveIcon sx={{ color: "#8b949e", fontSize: 16 }} />
            </IconButton>
          </Tooltip>
        </div>
      </div>

      <Input
        placeholder="Note title..."
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        style={{
          background: "#0d1117",
          border: "none",
          borderBottom: "1px solid #30363d",
          borderRadius: 0,
          color: "#e6edf3",
          fontSize: 16,
          fontWeight: 600,
          padding: "10px 16px",
        }}
        styles={{ input: { color: "#e6edf3", background: "transparent" } }}
      />

      <TextArea
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
        placeholder="Write your markdown here..."
        style={{
          flex: 1,
          background: "#0d1117",
          color: "#e6edf3",
          border: "none",
          borderRadius: 0,
          resize: "none",
          fontFamily: '"JetBrains Mono", "Fira Code", monospace',
          fontSize: 14,
          lineHeight: 1.6,
          padding: "16px",
        }}
        styles={{ textarea: { color: "#e6edf3", background: "transparent" } }}
      />

      <div
        style={{
          padding: "4px 12px",
          background: "#238636",
          color: "#fff",
          fontSize: 11,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>{content.length} characters</span>
        <span>{content.split("\n").length} lines</span>
      </div>
    </div>
  );
};

export default MarkdownEditor;
