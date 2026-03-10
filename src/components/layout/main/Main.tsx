import { Box } from '@mui/material';
import { Outlet } from 'react-router';

const Main = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        minHeight: 0,
        backgroundColor: 'background.default', // TODO:Shane - might not need anymore.
      }}
    >
      <Outlet />
    </Box>
  );
};

export default Main;
