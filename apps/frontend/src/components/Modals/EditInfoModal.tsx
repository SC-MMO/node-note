import React, { useState } from 'react';
import { Modal, Input, message } from 'antd';
import { useCurrentUser, useUpdateUser } from '../../hooks/useAuth';

interface EditInfoModalProps {
  open: boolean;
  onClose: () => void;
}

const EditInfoModal: React.FC<EditInfoModalProps> = ({ open, onClose }) => {
  const { data: user } = useCurrentUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const updateUser = useUpdateUser();

  React.useEffect(() => {
    if (user) setUsername(user.username);
  }, [user]);

  const handleSave = () => {
    const payload: { username?: string; password?: string } = {};
    if (username && username !== user?.username) payload.username = username;
    if (password) payload.password = password;
    updateUser.mutate(payload, {
      onSuccess: () => {
        message.success('Info updated');
        setPassword('');
        onClose();
      },
    });
  };

  return (
    <Modal
      title="Edit Info"
      open={open}
      onCancel={onClose}
      onOk={handleSave}
      confirmLoading={updateUser.isPending}
      styles={{
        content: { background: '#161b22', border: '1px solid #30363d' },
        header: { background: '#161b22', color: '#e6edf3' },
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div>
          <label style={{ color: '#8b949e', fontSize: 12 }}>Username</label>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ background: '#0d1117', border: '1px solid #30363d', color: '#e6edf3' }}
            styles={{ input: { color: '#e6edf3', background: 'transparent' } }}
          />
        </div>
        <div>
          <label style={{ color: '#8b949e', fontSize: 12 }}>New Password</label>
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Leave blank to keep current"
            style={{ background: '#0d1117', border: '1px solid #30363d', color: '#e6edf3' }}
            styles={{ input: { color: '#e6edf3', background: 'transparent' } }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default EditInfoModal;
