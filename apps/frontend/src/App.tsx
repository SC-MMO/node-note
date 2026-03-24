import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider, theme } from 'antd';
import EditorPage from './pages/EditorPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30000,
      retry: 1,
    },
  },
});

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          token: {
            colorPrimary: '#58a6ff',
            colorBgContainer: '#161b22',
            colorBgElevated: '#161b22',
            colorBorder: '#30363d',
            colorText: '#e6edf3',
            colorTextSecondary: '#8b949e',
            borderRadius: 8,
          },
        }}
      >
        <EditorPage />
      </ConfigProvider>
    </QueryClientProvider>
  );
};

export default App;
