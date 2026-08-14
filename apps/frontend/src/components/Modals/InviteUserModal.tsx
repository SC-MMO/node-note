import React, { useState } from 'react';
import { Modal, Input, Select, message } from 'antd';
import { useMyGroups, useInviteUser } from '../../hooks/useGroups';

interface InviteUserModalProps {
  open: boolean;
  onClose: () => void;
}

const InviteUserModal: React.FC<InviteUserModalProps> = ({ open, onClose }) => {
  const [email, setEmail] = useState('');
  const [selectedGroupId, setSelectedGroupId] = useState<number | null>(null);
  const { data: groups } = useMyGroups();
  const inviteUser = useInviteUser();

  const handleInvite = () => {
    if (!selectedGroupId || !email) return;
    inviteUser.mutate(
      { groupId: selectedGroupId, email },
      {
        onSuccess: () => {
          message.success('User invited successfully');
          setEmail('');
          onClose();
        },
      }
    );
  };

  return (
    <Modal
      title="Invite User to Group"
      open={open}
      onCancel={onClose}
      onOk={handleInvite}
      confirmLoading={inviteUser.isPending}
      okText="Invite"
      styles={{
        content: { background: '#161b22', border: '1px solid #30363d' },
        header: { background: '#161b22', color: '#e6edf3' },
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Select
          placeholder="Select a group"
          onChange={(value: number) => setSelectedGroupId(value)}
          options={groups?.map((g) => ({ label: `Group #${g.groupId}`, value: g.groupId })) ?? []}
          style={{ width: '100%' }}
        />
        <Input
          placeholder="User email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ background: '#0d1117', border: '1px solid #30363d', color: '#e6edf3' }}
          styles={{ input: { color: '#e6edf3', background: 'transparent' } }}
        />
      </div>
    </Modal>
  );
};

export default InviteUserModal;
