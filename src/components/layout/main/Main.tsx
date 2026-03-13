import { Box } from '@mui/material';
import { Outlet } from 'react-router';

const Main = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        minHeight: 0,
        borderLeft: '1px solid',
        borderRight: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Outlet />
    </Box>
  );
};

export default Main;
