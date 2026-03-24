import React, { useState } from 'react';
import { Modal, Select, List, Button, message, Popconfirm } from 'antd';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { IconButton } from '@mui/material';
import { useMyGroups, useGroupMembers, useDeleteGroup, useRemoveMember } from '../../hooks/useGroups';

interface ManageGroupModalProps {
  open: boolean;
  onClose: () => void;
}

const ManageGroupModal: React.FC<ManageGroupModalProps> = ({ open, onClose }) => {
  const [selectedGroupId, setSelectedGroupId] = useState<number | null>(null);
  const { data: groups } = useMyGroups();
  const { data: members } = useGroupMembers(selectedGroupId);
  const deleteGroup = useDeleteGroup();
  const removeMember = useRemoveMember();

  const handleDeleteGroup = (groupId: number) => {
    deleteGroup.mutate(groupId, {
      onSuccess: () => {
        message.success('Group deleted');
        setSelectedGroupId(null);
      },
    });
  };

  const handleRemoveMember = (userId: number) => {
    if (!selectedGroupId) return;
    removeMember.mutate({ groupId: selectedGroupId, userId }, {
      onSuccess: () => message.success('Member removed'),
    });
  };

  return (
    <Modal
      title="Manage Groups"
      open={open}
      onCancel={onClose}
      footer={null}
      width={500}
      styles={{
        content: { background: '#161b22', border: '1px solid #30363d' },
        header: { background: '#161b22', color: '#e6edf3' },
      }}
    >
      <Select
        placeholder="Select a group"
        value={selectedGroupId}
        onChange={(value: number) => setSelectedGroupId(value)}
        options={groups?.map((g) => ({ label: `Group #${g.groupId}`, value: g.groupId })) ?? []}
        style={{ width: '100%', marginBottom: 16 }}
      />

      {selectedGroupId && (
        <>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 12 }}>
            <Popconfirm
              title="Delete this group?"
              onConfirm={() => handleDeleteGroup(selectedGroupId)}
            >
              <Button danger icon={<DeleteOutlineIcon sx={{ fontSize: 16 }} />}>
                Delete Group
              </Button>
            </Popconfirm>
          </div>

          <List
            dataSource={members ?? []}
            renderItem={(member) => (
              <List.Item
                style={{ borderBottom: '1px solid #30363d' }}
                actions={[
                  <IconButton
                    key="remove"
                    size="small"
                    onClick={() => handleRemoveMember(member.userId)}
                  >
                    <PersonRemoveIcon sx={{ color: '#f85149', fontSize: 18 }} />
                  </IconButton>,
                ]}
              >
                <span style={{ color: '#e6edf3' }}>
                  {member.user?.username ?? `User #${member.userId}`}
                </span>
              </List.Item>
            )}
            locale={{ emptyText: <span style={{ color: '#8b949e' }}>No members</span> }}
          />
        </>
      )}
    </Modal>
  );
};

export default ManageGroupModal;
