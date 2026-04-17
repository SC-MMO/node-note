// src/App.tsx
import React, { useState, useCallback } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from "@tanstack/react-query";
import { ConfigProvider, theme } from "antd";
import EditorPage from "./pages/EditorPage";
import LoginModal from "./components/Modals/LoginModal";
import RegisterModal from "./components/Modals/RegisterModal";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30000,
      retry: 1,
    },
  },
});

type AuthModal = "login" | "register" | null;

const AppContent: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => !!localStorage.getItem("token"),
  );
  const [authModal, setAuthModal] = useState<AuthModal>(() =>
    localStorage.getItem("token") ? null : "login",
  );
  const qc = useQueryClient();

  const handleAuthSuccess = useCallback(() => {
    setIsAuthenticated(true);
    setAuthModal(null);
    qc.invalidateQueries({ queryKey: ["currentUser"] });
    qc.invalidateQueries({ queryKey: ["myNotes"] });
  }, [qc]);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setAuthModal("login");
    qc.clear();
  }, [qc]);

  return (
    <>
      {isAuthenticated ? (
        <EditorPage onLogout={handleLogout} />
      ) : (
        <div
          style={{
            height: "100vh",
            background: "#0d1117",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "#58a6ff", fontSize: 36, marginBottom: 8 }}>
              NodeNote
            </h1>
            <p style={{ color: "#8b949e" }}>Please sign in to continue</p>
          </div>
        </div>
      )}

      <LoginModal
        open={authModal === "login"}
        onClose={() => {
          if (isAuthenticated) setAuthModal(null);
        }}
        onSwitchToRegister={() => setAuthModal("register")}
        onSuccess={handleAuthSuccess}
      />

      <RegisterModal
        open={authModal === "register"}
        onClose={() => {
          if (isAuthenticated) setAuthModal(null);
        }}
        onSwitchToLogin={() => setAuthModal("login")}
        onSuccess={handleAuthSuccess}
      />
    </>
  );
};

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          token: {
            colorPrimary: "#58a6ff",
            colorBgContainer: "#161b22",
            colorBgElevated: "#161b22",
            colorBorder: "#30363d",
            colorText: "#e6edf3",
            colorTextSecondary: "#8b949e",
            borderRadius: 8,
          },
        }}
      >
        <AppContent />
      </ConfigProvider>
    </QueryClientProvider>
  );
};

export default App;
