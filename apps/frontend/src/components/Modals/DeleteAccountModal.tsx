import React, { useState } from 'react';
import { Modal, Input, message, Typography } from 'antd';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { useDeleteAccount } from '../../hooks/useAuth';

interface DeleteAccountModalProps {
  open: boolean;
  onClose: () => void;
}

const DeleteAccountModal: React.FC<DeleteAccountModalProps> = ({ open, onClose }) => {
  const [confirmation, setConfirmation] = useState('');
  const deleteAccount = useDeleteAccount();

  const handleDelete = () => {
    if (confirmation !== 'DELETE') return;
    deleteAccount.mutate(undefined, {
      onSuccess: () => {
        message.success('Account deleted');
        localStorage.removeItem('token');
        window.location.href = '/login';
      },
    });
  };

  return (
    <Modal
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <WarningAmberIcon sx={{ color: '#f85149' }} />
          <span>Delete Account</span>
        </div>
      }
      open={open}
      onCancel={onClose}
      onOk={handleDelete}
      okButtonProps={{ danger: true, disabled: confirmation !== 'DELETE' }}
      okText="Delete Forever"
      confirmLoading={deleteAccount.isPending}
      styles={{
        content: { background: '#161b22', border: '1px solid #30363d' },
        header: { background: '#161b22', color: '#e6edf3' },
      }}
    >
      <Typography.Paragraph style={{ color: '#f85149' }}>
        This action cannot be undone. All your notes, groups, and data will be permanently deleted.
      </Typography.Paragraph>
      <Typography.Paragraph style={{ color: '#8b949e' }}>
        Type <strong style={{ color: '#e6edf3' }}>DELETE</strong> to confirm:
      </Typography.Paragraph>
      <Input
        value={confirmation}
        onChange={(e) => setConfirmation(e.target.value)}
        style={{ background: '#0d1117', border: '1px solid #30363d', color: '#e6edf3' }}
        styles={{ input: { color: '#e6edf3', background: 'transparent' } }}
      />
    </Modal>
  );
};

export default DeleteAccountModal;
