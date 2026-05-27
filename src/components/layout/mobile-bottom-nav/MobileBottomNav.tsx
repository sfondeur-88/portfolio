import { ROUTE_PATHS } from '@/routes/paths';
import { MOBILE_NAV_HEIGHT } from '@/utils/layout';
import { Mood, TerminalOutlined, WavingHand, WidgetsRounded } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router';

const navItems = [
  { label: 'Welcome', path: ROUTE_PATHS.WELCOME, icon: <WavingHand fontSize="small" /> },
  { label: 'AboutMe', path: ROUTE_PATHS.ABOUT_ME, icon: <Mood fontSize="small" /> },
  {
    label: 'Experience',
    path: ROUTE_PATHS.EXPERIENCE,
    icon: <TerminalOutlined fontSize="small" />,
  },
  { label: 'Extensions', path: ROUTE_PATHS.EXTENSIONS, icon: <WidgetsRounded fontSize="small" /> },
];

const MobileBottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box
      component="nav"
      aria-label="Mobile navigation"
      sx={{
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        borderTop: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.default',
      }}
    >
      <Stack direction="row" alignItems="center" height={MOBILE_NAV_HEIGHT}>
        {navItems.map(({ label, path, icon }) => {
          const isActive = location.pathname === path;
          return (
            <Box
              key={path}
              onClick={() => navigate(path)}
              sx={{
                flex: 1,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 0.25,
                cursor: 'pointer',
                borderTop: '2px solid',
                borderColor: isActive ? 'primary.main' : 'transparent',
                color: isActive ? 'text.primary' : 'text.secondary',
                transition: 'color 0.15s ease, border-color 0.15s ease',
                userSelect: 'none',
                '&:active': {
                  backgroundColor: 'action.selected',
                },
              }}
            >
              {icon}
              <Typography variant="tag" sx={{ fontSize: '11px', lineHeight: 1, color: 'inherit' }}>
                {label}
              </Typography>
            </Box>
          );
        })}
      </Stack>
      <Box sx={{ height: 'env(safe-area-inset-bottom)', backgroundColor: 'background.default' }} />
    </Box>
  );
};

export default MobileBottomNav;
