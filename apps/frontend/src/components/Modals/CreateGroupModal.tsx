import React, { useState } from 'react';
import { Modal, Input, message } from 'antd';
import { useCreateGroup } from '../../hooks/useGroups';

interface CreateGroupModalProps {
  open: boolean;
  onClose: () => void;
}

const CreateGroupModal: React.FC<CreateGroupModalProps> = ({ open, onClose }) => {
  const [name, setName] = useState('');
  const createGroup = useCreateGroup();

  const handleCreate = () => {
    createGroup.mutate(
      { name },
      {
        onSuccess: () => {
          message.success('Group created successfully');
          setName('');
          onClose();
        },
      }
    );
  };

  return (
    <Modal
      title="Create Group"
      open={open}
      onCancel={onClose}
      onOk={handleCreate}
      confirmLoading={createGroup.isPending}
      okText="Create"
      styles={{
        content: { background: '#161b22', border: '1px solid #30363d' },
        header: { background: '#161b22', color: '#e6edf3' },
      }}
    >
      <Input
        placeholder="Group name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onPressEnter={handleCreate}
        style={{ background: '#0d1117', border: '1px solid #30363d', color: '#e6edf3' }}
        styles={{ input: { color: '#e6edf3', background: 'transparent' } }}
      />
    </Modal>
  );
};

export default CreateGroupModal;
