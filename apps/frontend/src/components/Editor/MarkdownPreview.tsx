import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface MarkdownPreviewProps {
  content: string;
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ content }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '6px 12px',
          background: '#161b22',
          borderBottom: '1px solid #30363d',
          gap: 6,
        }}
      >
        <VisibilityIcon sx={{ color: '#58a6ff', fontSize: 16 }} />
        <span style={{ color: '#e6edf3', fontSize: 13, fontWeight: 600 }}>Preview</span>
      </div>

      <div
        style={{
          flex: 1,
          overflow: 'auto',
          padding: '20px 24px',
          background: '#0d1117',
          color: '#e6edf3',
        }}
        className="markdown-preview"
      >
        {content ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        ) : (
          <div style={{ color: '#484f58', fontStyle: 'italic', textAlign: 'center', marginTop: 60 }}>
            Start writing to see the preview...
          </div>
        )}
      </div>

      <div
        style={{
          padding: '4px 12px',
          background: '#1f6feb',
          color: '#fff',
          fontSize: 11,
        }}
      >
        <span>{content.replace(/[^a-zA-Z0-9 ]/g, '').length} characters (text only)</span>
      </div>
    </div>
  );
};

export default MarkdownPreview;
