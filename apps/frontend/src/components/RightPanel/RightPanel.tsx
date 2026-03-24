import React, { useState } from "react";
import { Button, Divider } from "antd";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import type { Note } from "../../types";
import EditInfoModal from "../Modals/EditInfoModal";
import ManageEmailModal from "../Modals/ManageEmailModal";
import DeleteAccountModal from "../Modals/DeleteAccountModal";
import SearchGroupsModal from "../Modals/SearchGroupsModal";
import InviteUserModal from "../Modals/InviteUserModal";
import CreateGroupModal from "../Modals/CreateGroupModal";
import ManageGroupModal from "../Modals/ManageGroupModal";

interface RightPanelProps {
  selectedNote: Note | null;
  onClose: () => void;
}

type ModalType =
  | "editInfo"
  | "manageEmail"
  | "deleteAccount"
  | "searchGroups"
  | "inviteUsers"
  | "createGroup"
  | "manageGroups"
  | null;

const RightPanel: React.FC<RightPanelProps> = ({ onClose }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const sectionButtonStyle: React.CSSProperties = {
    width: "100%",
    background: "#21262d",
    border: "1px solid #30363d",
    color: "#e6edf3",
    borderRadius: 8,
    marginBottom: 6,
    textAlign: "left" as const,
    fontSize: 13,
  };

  const sectionHeaderStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    color: "#58a6ff",
    fontWeight: 700,
    fontSize: 14,
    padding: "8px 0",
  };

  return (
    <div style={{ padding: 16 }}>
      <div style={sectionHeaderStyle}>
        <PersonIcon sx={{ fontSize: 18 }} />
        Account
      </div>
      <Button
        style={sectionButtonStyle}
        onClick={() => setActiveModal("editInfo")}
      >
        Edit Info
      </Button>
      <Button
        style={sectionButtonStyle}
        onClick={() => setActiveModal("manageEmail")}
      >
        Manage Email
      </Button>
      <Button
        style={sectionButtonStyle}
        onClick={() => setActiveModal("deleteAccount")}
      >
        Delete Account
      </Button>

      <Divider style={{ borderColor: "#30363d", margin: "12px 0" }} />

      <div style={sectionHeaderStyle}>
        <GroupIcon sx={{ fontSize: 18 }} />
        Groups
      </div>
      <Button
        style={sectionButtonStyle}
        onClick={() => setActiveModal("searchGroups")}
      >
        Search Groups
      </Button>
      <Button
        style={sectionButtonStyle}
        onClick={() => setActiveModal("inviteUsers")}
      >
        Invite Users
      </Button>
      <Button
        style={sectionButtonStyle}
        onClick={() => setActiveModal("createGroup")}
      >
        Create Group
      </Button>
      <Button
        style={sectionButtonStyle}
        onClick={() => setActiveModal("manageGroups")}
      >
        Manage Groups
      </Button>

      <Divider style={{ borderColor: "#30363d", margin: "12px 0" }} />

      <div style={sectionHeaderStyle}>
        <SettingsIcon sx={{ fontSize: 18 }} />
        Settings
      </div>

      <EditInfoModal
        open={activeModal === "editInfo"}
        onClose={() => setActiveModal(null)}
      />
      <ManageEmailModal
        open={activeModal === "manageEmail"}
        onClose={() => setActiveModal(null)}
      />
      <DeleteAccountModal
        open={activeModal === "deleteAccount"}
        onClose={() => setActiveModal(null)}
      />
      <SearchGroupsModal
        open={activeModal === "searchGroups"}
        onClose={() => setActiveModal(null)}
      />
      <InviteUserModal
        open={activeModal === "inviteUsers"}
        onClose={() => setActiveModal(null)}
      />
      <CreateGroupModal
        open={activeModal === "createGroup"}
        onClose={() => setActiveModal(null)}
      />
      <ManageGroupModal
        open={activeModal === "manageGroups"}
        onClose={() => setActiveModal(null)}
      />
    </div>
  );
};

export default RightPanel;
