import React, { useState } from "react";
import { Input, Collapse, Spin, Empty } from "antd";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import {
  useMyNotes,
  useGroupNotes,
  useSharedNotes,
  useSearchNotes,
  useDeleteNote,
} from "../../hooks/useNotes";
import type { Note } from "../../types";
import NoteListItem from "./NoteListItem";
import CreateNoteModal from "../Modals/CreateNoteModal";
import ShareNoteModal from "../Modals/ShareNoteModal";

interface NotesSidebarProps {
  onSelectNote: (note: Note) => void;
  selectedNoteId: number | null;
  onNewNote: () => void;
}

const NotesSidebar: React.FC<NotesSidebarProps> = ({
  onSelectNote,
  selectedNoteId,
  onNewNote,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [shareNote, setShareNote] = useState<Note | null>(null);

  const { data: myNotes, isLoading: loadingMy } = useMyNotes();
  const { data: groupNotes, isLoading: loadingGroup } = useGroupNotes();
  const { data: sharedNotes, isLoading: loadingShared } = useSharedNotes();
  const { data: searchResults } = useSearchNotes(searchQuery);
  const deleteNote = useDeleteNote();

  const handleDelete = (noteId: number) => {
    deleteNote.mutate(noteId);
  };

  const renderNoteList = (
    notes: Note[] | undefined,
    loading: boolean,
    showActions = true,
  ) => {
    if (loading)
      return <Spin size="small" style={{ display: "block", padding: 16 }} />;
    if (!notes?.length)
      return (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={
            <span style={{ color: "#8b949e", fontSize: 12 }}>No notes</span>
          }
        />
      );
    return notes.map((note) => (
      <NoteListItem
        key={note.noteId}
        note={note}
        isSelected={selectedNoteId === note.noteId}
        onSelect={onSelectNote}
        onDelete={showActions ? handleDelete : undefined}
        onShare={showActions ? (n) => setShareNote(n) : undefined}
        showActions={showActions}
      />
    ));
  };

  const collapseItems = [
    {
      key: "my",
      label: (
        <span style={{ color: "#e6edf3", fontSize: 13, fontWeight: 600 }}>
          Your Notes
        </span>
      ),
      children: renderNoteList(myNotes, loadingMy),
    },
    {
      key: "group",
      label: (
        <span style={{ color: "#e6edf3", fontSize: 13, fontWeight: 600 }}>
          Group Notes
        </span>
      ),
      children: renderNoteList(groupNotes, loadingGroup, false),
    },
    {
      key: "shared",
      label: (
        <span style={{ color: "#e6edf3", fontSize: 13, fontWeight: 600 }}>
          Shared Notes
        </span>
      ),
      children: renderNoteList(sharedNotes, loadingShared, false),
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ padding: "12px 12px 8px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 8,
          }}
        >
          <Input
            prefix={<SearchIcon sx={{ color: "#8b949e", fontSize: 16 }} />}
            placeholder="Search notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              background: "#0d1117",
              border: "1px solid #30363d",
              color: "#e6edf3",
              borderRadius: 6,
            }}
            styles={{ input: { color: "#e6edf3", background: "transparent" } }}
          />
          <IconButton
            size="small"
            onClick={() => {
              onNewNote();
              setCreateModalOpen(true);
            }}
            sx={{
              background: "#238636",
              "&:hover": { background: "#2ea043" },
              borderRadius: "6px",
              padding: "6px",
            }}
          >
            <AddIcon sx={{ color: "#fff", fontSize: 18 }} />
          </IconButton>
        </div>
      </div>

      {searchQuery && searchResults?.length ? (
        <div style={{ padding: "0 4px" }}>
          <div
            style={{
              color: "#8b949e",
              fontSize: 11,
              padding: "4px 12px",
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            Search Results
          </div>
          {searchResults.map((note) => (
            <NoteListItem
              key={note.noteId}
              note={note}
              isSelected={selectedNoteId === note.noteId}
              onSelect={onSelectNote}
              showActions={false}
            />
          ))}
        </div>
      ) : (
        <div style={{ flex: 1, overflow: "auto", padding: "0 4px" }}>
          <Collapse
            defaultActiveKey={["my", "group", "shared"]}
            ghost
            items={collapseItems}
            style={{ background: "transparent" }}
            expandIconPosition="end"
          />
        </div>
      )}

      <CreateNoteModal
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onCreated={(note) => {
          onSelectNote(note);
          setCreateModalOpen(false);
        }}
      />

      <ShareNoteModal
        open={shareNote !== null}
        onClose={() => setShareNote(null)}
        note={shareNote}
      />
    </div>
  );
};

export default NotesSidebar;
