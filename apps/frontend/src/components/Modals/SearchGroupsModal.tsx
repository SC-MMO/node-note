import React, { useState } from 'react';
import { Modal, Input, List, Empty } from 'antd';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchGroups } from '../../hooks/useGroups';

interface SearchGroupsModalProps {
  open: boolean;
  onClose: () => void;
}

const SearchGroupsModal: React.FC<SearchGroupsModalProps> = ({ open, onClose }) => {
  const [query, setQuery] = useState('');
  const { data: groups, isLoading } = useSearchGroups(query);

  return (
    <Modal
      title="Search Groups"
      open={open}
      onCancel={onClose}
      footer={null}
      styles={{
        content: { background: '#161b22', border: '1px solid #30363d' },
        header: { background: '#161b22', color: '#e6edf3' },
      }}
    >
      <Input
        prefix={<SearchIcon sx={{ color: '#8b949e', fontSize: 16 }} />}
        placeholder="Search groups..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ background: '#0d1117', border: '1px solid #30363d', color: '#e6edf3', marginBottom: 16 }}
        styles={{ input: { color: '#e6edf3', background: 'transparent' } }}
      />

      <List
        loading={isLoading}
        dataSource={groups ?? []}
        renderItem={(group) => (
          <List.Item style={{ borderBottom: '1px solid #30363d' }}>
            <span style={{ color: '#e6edf3' }}>
              Group #{group.groupId} — Owner: {group.owner?.username ?? `User #${group.ownerId}`}
            </span>
          </List.Item>
        )}
        locale={{
          emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<span style={{ color: '#8b949e' }}>No groups found</span>} />,
        }}
      />
    </Modal>
  );
};

export default SearchGroupsModal;
