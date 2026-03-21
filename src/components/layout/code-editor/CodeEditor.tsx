import LineNumberGutter from '@/components/ui/design/LineNumberGutter';
import { Box, Stack } from '@mui/material';
import { Outlet, useLocation } from 'react-router';
import TabBar from './TabBar';

const CodeEditor = () => {
  const { pathname } = useLocation();
  const showGutter = pathname !== '/welcome';

  return (
    <Stack style={{ flex: 1, minHeight: 0 }}>
      <TabBar />
      {showGutter ? (
        <LineNumberGutter>
          <Outlet />
        </LineNumberGutter>
      ) : (
        <Box sx={{ flex: 1, minHeight: 0, overflow: 'auto' }}>
          <Outlet />
        </Box>
      )}
    </Stack>
  );
};

export default CodeEditor;
