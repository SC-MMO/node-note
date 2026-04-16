// src/components/Modals/RegisterModal.tsx
import React, { useState } from "react";
import { Modal, Input, message, Typography } from "antd";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import api from "../../api/axiosInstance";

interface RegisterModalProps {
    open: boolean;
    onClose: () => void;
    onSwitchToLogin: () => void;
    onSuccess: () => void;
}

interface RegisterResponse {
    userId: number;
    username: string;
    email: string;
    token: string;
}

const RegisterModal: React.FC<RegisterModalProps> = ({
    open,
    onClose,
    onSwitchToLogin,
    onSuccess,
}) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        if (!username || !email || !password || !confirmPassword) {
            message.warning("Please fill in all fields");
            return;
        }
        if (password !== confirmPassword) {
            message.error("Passwords do not match");
            return;
        }
        if (password.length < 6) {
            message.error("Password must be at least 6 characters");
            return;
        }

        setLoading(true);
        try {
            const { data } = await api.post<RegisterResponse>(
                "/auth/register",
                { username, email, password },
            );
            localStorage.setItem("token", data.token);
            message.success(`Welcome, ${data.username}!`);
            setUsername("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            onSuccess();
        } catch (error) {
            message.error(`Registration failed. ${error}`);
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
                    MarkLiveEdit
                </Typography.Title>
                <Typography.Text style={{ color: "#8b949e", fontSize: 13 }}>
                    Create your account
                </Typography.Text>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div>
                    <label
                        style={{
                            color: "#8b949e",
                            fontSize: 12,
                            marginBottom: 4,
                            display: "block",
                        }}
                    >
                        Username
                    </label>
                    <Input
                        prefix={
                            <PersonIcon
                                sx={{ color: "#8b949e", fontSize: 18 }}
                            />
                        }
                        placeholder="Choose a username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                        placeholder="At least 6 characters"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        Confirm Password
                    </label>
                    <Input.Password
                        prefix={
                            <LockIcon sx={{ color: "#8b949e", fontSize: 18 }} />
                        }
                        placeholder="Repeat your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        onPressEnter={handleRegister}
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
                    onClick={handleRegister}
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
                        marginTop: 4,
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
                    {loading ? "Creating account..." : "Create Account"}
                </button>

                <div style={{ textAlign: "center", marginTop: 8 }}>
                    <Typography.Text style={{ color: "#8b949e", fontSize: 13 }}>
                        Already have an account?{" "}
                        <span
                            onClick={onSwitchToLogin}
                            style={{
                                color: "#58a6ff",
                                cursor: "pointer",
                                fontWeight: 500,
                            }}
                        >
                            Sign in
                        </span>
                    </Typography.Text>
                </div>
            </div>
        </Modal>
    );
};

export default RegisterModal;
