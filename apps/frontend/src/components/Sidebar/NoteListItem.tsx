import React from "react";
import type { Note } from "../../types";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ShareIcon from "@mui/icons-material/Share";
import { IconButton } from "@mui/material";

interface NoteListItemProps {
  note: Note;
  isSelected: boolean;
  onSelect: (note: Note) => void;
  onDelete?: (noteId: number) => void;
  onShare?: (note: Note) => void;
  showActions?: boolean;
}

const NoteListItem: React.FC<NoteListItemProps> = ({
  note,
  isSelected,
  onSelect,
  onDelete,
  onShare,
  showActions = true,
}) => {
  return (
    <div
      onClick={() => onSelect(note)}
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 12px",
        cursor: "pointer",
        background: isSelected ? "#1f6feb22" : "transparent",
        borderLeft: isSelected ? "3px solid #58a6ff" : "3px solid transparent",
        transition: "all 0.15s ease",
        borderRadius: "0 6px 6px 0",
        margin: "2px 8px 2px 0",
      }}
      onMouseEnter={(e) => {
        if (!isSelected) e.currentTarget.style.background = "#30363d44";
      }}
      onMouseLeave={(e) => {
        if (!isSelected) e.currentTarget.style.background = "transparent";
      }}
    >
      <DescriptionOutlinedIcon sx={{ color: "#8b949e", fontSize: 18, mr: 1 }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            color: "#e6edf3",
            fontSize: 13,
            fontWeight: 500,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {note.title || "Untitled"}
        </div>
        <div style={{ color: "#8b949e", fontSize: 11 }}>
          {new Date(note.updatedAt).toLocaleDateString()}
        </div>
      </div>
      {showActions && (
        <div style={{ display: "flex", gap: 2 }}>
          {onShare && (
            <IconButton
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                onShare(note);
              }}
            >
              <ShareIcon sx={{ color: "#8b949e", fontSize: 15 }} />
            </IconButton>
          )}
          {onDelete && (
            <IconButton
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(note.noteId);
              }}
            >
              <DeleteOutlineIcon sx={{ color: "#8b949e", fontSize: 15 }} />
            </IconButton>
          )}
        </div>
      )}
    </div>
  );
};

export default NoteListItem;
