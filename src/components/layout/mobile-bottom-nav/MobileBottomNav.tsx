import { ROUTE_PATHS } from '@/routes/paths';
import { Mood, TerminalOutlined, WavingHand } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router';

const MOBILE_NAV_HEIGHT = 56;

const navItems = [
  { label: 'Welcome', path: ROUTE_PATHS.WELCOME, icon: <WavingHand fontSize="small" /> },
  { label: 'AboutMe', path: ROUTE_PATHS.ABOUT_ME, icon: <Mood fontSize="small" /> },
  { label: 'Experience', path: ROUTE_PATHS.EXPERIENCE, icon: <TerminalOutlined fontSize="small" /> },
];

export const MOBILE_NAV_HEIGHT_PX = MOBILE_NAV_HEIGHT;

const MobileBottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box
      component="nav"
      aria-label="Mobile navigation"
      sx={{
        height: MOBILE_NAV_HEIGHT,
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        borderTop: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.default',
        overflow: 'hidden',
      }}
    >
      <Stack direction="row" alignItems="center" flex={1} height="100%">
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
              <Typography
                variant="tag"
                sx={{ fontSize: '11px', lineHeight: 1, color: 'inherit' }}
              >
                {label}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default MobileBottomNav;
