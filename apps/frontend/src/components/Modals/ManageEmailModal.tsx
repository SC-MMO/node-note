import React, { useState } from 'react';
import { Modal, Input, message } from 'antd';
import { useCurrentUser, useUpdateEmail } from '../../hooks/useAuth';

interface ManageEmailModalProps {
  open: boolean;
  onClose: () => void;
}

const ManageEmailModal: React.FC<ManageEmailModalProps> = ({ open, onClose }) => {
  const { data: user } = useCurrentUser();
  const [email, setEmail] = useState('');
  const updateEmail = useUpdateEmail();

  React.useEffect(() => {
    if (user) setEmail(user.email);
  }, [user]);

  const handleSave = () => {
    updateEmail.mutate({ email }, {
      onSuccess: () => {
        message.success('Email updated');
        onClose();
      },
    });
  };

  return (
    <Modal
      title="Manage Email"
      open={open}
      onCancel={onClose}
      onOk={handleSave}
      confirmLoading={updateEmail.isPending}
      styles={{
        content: { background: '#161b22', border: '1px solid #30363d' },
        header: { background: '#161b22', color: '#e6edf3' },
      }}
    >
      <div>
        <label style={{ color: '#8b949e', fontSize: 12 }}>Current: {user?.email}</label>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="New email address"
          style={{ background: '#0d1117', border: '1px solid #30363d', color: '#e6edf3', marginTop: 8 }}
          styles={{ input: { color: '#e6edf3', background: 'transparent' } }}
        />
      </div>
    </Modal>
  );
};

export default ManageEmailModal;
