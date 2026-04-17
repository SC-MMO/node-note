// src/components/Modals/LoginModal.tsx
import React, { useState } from "react";
import { Modal, Input, message, Typography } from "antd";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import api from "../../api/axiosInstance";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
  onSwitchToRegister: () => void;
  onSuccess: () => void;
}

interface LoginResponse {
  userId: number;
  username: string;
  email: string;
  token: string;
}

const LoginModal: React.FC<LoginModalProps> = ({
  open,
  onClose,
  onSwitchToRegister,
  onSuccess,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      message.warning("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const { data } = await api.post<LoginResponse>("/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      message.success(`Welcome back, ${data.username}!`);
      setEmail("");
      setPassword("");
      onSuccess();
    } catch {
      message.error("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title={null}
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      width={400}
      styles={{
        content: {
          background: "#161b22",
          border: "1px solid #30363d",
          borderRadius: 12,
          padding: 0,
        },
        body: { padding: "32px 24px" },
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <Typography.Title
          level={3}
          style={{ color: "#58a6ff", margin: 0 }}
        >
          NodeNote
        </Typography.Title>
        <Typography.Text style={{ color: "#8b949e", fontSize: 13 }}>
          Sign in to your account
        </Typography.Text>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div>
          <label
            style={{
              color: "#8b949e",
              fontSize: 12,
              marginBottom: 4,
              display: "block",
            }}
          >
            Email
          </label>
          <Input
            prefix={
              <EmailIcon
                sx={{ color: "#8b949e", fontSize: 18 }}
              />
            }
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onPressEnter={handleLogin}
            style={{
              background: "#0d1117",
              border: "1px solid #30363d",
              borderRadius: 8,
              height: 42,
            }}
            styles={{
              input: {
                color: "#e6edf3",
                background: "transparent",
              },
            }}
          />
        </div>

        <div>
          <label
            style={{
              color: "#8b949e",
              fontSize: 12,
              marginBottom: 4,
              display: "block",
            }}
          >
            Password
          </label>
          <Input.Password
            prefix={
              <LockIcon sx={{ color: "#8b949e", fontSize: 18 }} />
            }
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onPressEnter={handleLogin}
            style={{
              background: "#0d1117",
              border: "1px solid #30363d",
              borderRadius: 8,
              height: 42,
            }}
            styles={{
              input: {
                color: "#e6edf3",
                background: "transparent",
              },
            }}
          />
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          style={{
            width: "100%",
            height: 42,
            background: "#238636",
            border: "none",
            borderRadius: 8,
            color: "#fff",
            fontSize: 14,
            fontWeight: 600,
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.7 : 1,
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => {
            if (!loading)
              e.currentTarget.style.background = "#2ea043";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#238636";
          }}
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        <div style={{ textAlign: "center", marginTop: 8 }}>
          <Typography.Text style={{ color: "#8b949e", fontSize: 13 }}>
            Don't have an account?{" "}
            <span
              onClick={onSwitchToRegister}
              style={{
                color: "#58a6ff",
                cursor: "pointer",
                fontWeight: 500,
              }}
            >
              Sign up
            </span>
          </Typography.Text>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
