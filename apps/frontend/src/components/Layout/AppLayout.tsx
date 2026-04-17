// src/components/Layout/AppLayout.tsx
import React, { useState } from "react";
import { Layout } from "antd";
import NotesSidebar from "../Sidebar/NotesSidebar";
import MarkdownEditor from "../Editor/MarkdownEditor";
import MarkdownPreview from "../Editor/MarkdownPreview";
import RightPanel from "../RightPanel/RightPanel";
import type { Note } from "../../types";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton, Tooltip } from "@mui/material";

const { Sider, Content } = Layout;

interface AppLayoutProps {
  onLogout: () => void;
}

const AppLayout: React.FC<AppLayoutProps> = ({ onLogout }) => {
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [editorContent, setEditorContent] = useState("");
  const [editorTitle, setEditorTitle] = useState("");
  const [rightPanelOpen, setRightPanelOpen] = useState(false);

  const handleSelectNote = (note: Note) => {
    setSelectedNote(note);
    setEditorContent(note.content);
    setEditorTitle(note.title);
  };

  const handleNewNote = () => {
    setSelectedNote(null);
    setEditorContent("");
    setEditorTitle("");
  };

  return (
    <Layout style={{ height: "100vh", background: "#0d1117" }}>
      <Sider
        width={280}
        style={{
          background: "#161b22",
          borderRight: "1px solid #30363d",
          overflow: "auto",
        }}
      >
        <NotesSidebar
          onSelectNote={handleSelectNote}
          selectedNoteId={selectedNote?.noteId ?? null}
          onNewNote={handleNewNote}
        />
      </Sider>

      <Layout style={{ background: "#0d1117" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 16px",
            background: "#161b22",
            borderBottom: "1px solid #30363d",
          }}
        >
          <div>
            <span style={{ color: "#58a6ff", fontWeight: 700, fontSize: 18 }}>
              NodeNote
            </span>
            <span style={{ color: "#8b949e", marginLeft: 8, fontSize: 12 }}>
              Markdown Live Editor
            </span>
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            <Tooltip title="Logout">
              <IconButton onClick={onLogout} size="small">
                <LogoutIcon sx={{ color: "#f85149", fontSize: 20 }} />
              </IconButton>
            </Tooltip>
            <IconButton
              onClick={() => setRightPanelOpen(!rightPanelOpen)}
              size="small"
            >
              <MenuIcon sx={{ color: "#8b949e" }} />
            </IconButton>
          </div>
        </div>

        <Content
          style={{
            display: "flex",
            flex: 1,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid #30363d",
            }}
          >
            <MarkdownEditor
              content={editorContent}
              title={editorTitle}
              onContentChange={setEditorContent}
              onTitleChange={setEditorTitle}
              note={selectedNote}
            />
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              overflow: "auto",
            }}
          >
            <MarkdownPreview content={editorContent} />
          </div>
        </Content>
      </Layout>

      {rightPanelOpen && (
        <Sider
          width={260}
          style={{
            background: "#161b22",
            borderLeft: "1px solid #30363d",
            overflow: "auto",
          }}
        >
          <RightPanel
            selectedNote={selectedNote}
            onClose={() => setRightPanelOpen(false)}
          />
        </Sider>
      )}
    </Layout>
  );
};

export default AppLayout;
