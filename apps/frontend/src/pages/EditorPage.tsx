// src/pages/EditorPage.tsx
import React from "react";
import AppLayout from "../components/Layout/AppLayout";

interface EditorPageProps {
  onLogout: () => void;
}

const EditorPage: React.FC<EditorPageProps> = ({ onLogout }) => {
  return <AppLayout onLogout={onLogout} />;
};

export default EditorPage;
