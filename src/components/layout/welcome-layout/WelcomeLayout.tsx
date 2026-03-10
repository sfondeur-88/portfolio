import AuroraGradient from '@/components/ui/design/AuroraGradient';
import { MAIN_PADDING } from '@/utils/layout';
import { Box } from '@mui/material';
import { Outlet } from 'react-router';

const WelcomeLayout = () => {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: `${MAIN_PADDING}px`,

        // TODO:Shane - move scrollbar content to PageLayout?
        scrollBehavior: 'smooth',
        '::-webkit-scrollbar': {
          width: '16px',
        },
        '::-webkit-scrollbar-track': {
          backgroundColor: '#222222',
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: '#444444',
          borderRadius: '2px',
          cursor: 'pointer',

          '&:hover': {
            backgroundColor: '#9A9A9A',
          },
        },
      }}
    >
      <Outlet />

      {/* Left & Right Aurora-Gradients */}
      <AuroraGradient width={375} height={375} position={{ top: 0, left: 0 }} colour="#6E9EFF" />
      <AuroraGradient
        width={425}
        height={425}
        position={{ bottom: 0, right: 0 }}
        colour="#66FFCC"
      />
    </Box>
  );
};

export default WelcomeLayout;
