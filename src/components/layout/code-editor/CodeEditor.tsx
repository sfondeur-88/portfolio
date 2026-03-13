import { Stack } from '@mui/material';
import { Outlet } from 'react-router';
import TabBar from './TabBar';

const CodeEditor = () => {
  return (
    <Stack style={{ flex: 1, minHeight: 0 }}>
      <TabBar />
      <Outlet />
    </Stack>
  );
};

export default CodeEditor;
