import { Mood, TerminalOutlined, WavingHand } from '@mui/icons-material';
import { Box, Stack, Tab, Tabs, Typography } from '@mui/material';
import { ReactElement } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { ROUTE_PATHS } from '../../../routes/paths';
import { HEADER_HEIGHT } from '../../../utils/layout';

type HeaderTabs = {
  label: string;
  path: string;
  icon: ReactElement;
};

const headerTabs: HeaderTabs[] = [
  { label: 'Welcome.tsx', path: ROUTE_PATHS.WELCOME, icon: <WavingHand /> },
  { label: 'AboutMe.tsx', path: ROUTE_PATHS.ABOUT_ME, icon: <Mood /> },
  { label: 'Experience.tsx', path: ROUTE_PATHS.EXPERIENCE, icon: <TerminalOutlined /> },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentTab = location.pathname;

  const handleTabChange = (_: React.SyntheticEvent, newValue: string) => {
    navigate(newValue);
  };

  return (
    <Box
      component="header"
      sx={{
        height: HEADER_HEIGHT,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '8px 8px 0px 0px',
        backgroundColor: 'background.default',
        zIndex: 1000,
      }}
    >
      <Stack direction="row">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '300px',
            paddingX: 1,
            borderRight: '1px solid',
            borderRightColor: 'divider',
          }}
        >
          <Typography component="span" color="primary" fontSize={18} fontWeight={600}>
            shane_fondeur
          </Typography>
        </Box>

        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          aria-label="tab-group"
          sx={{
            height: HEADER_HEIGHT,
            '& .MuiTabs-list > .MuiTab-root': {
              minHeight: HEADER_HEIGHT,
              textTransform: 'inherit',
              borderRight: '1px solid',
              borderRightColor: 'divider',
              borderRadius: 0,
              boxSizing: 'border-box',
              transition: '200ms color',
              color: 'rgba(255,255,255,0.5)',
              '&.Mui-selected, &:hover': {
                color: 'text.primary',
              },
            },
          }}
        >
          {headerTabs.map((tab) => (
            <Tab
              key={tab.label}
              value={tab.path}
              label={tab.label}
              icon={tab.icon}
              iconPosition="start"
            />
          ))}
        </Tabs>
      </Stack>
    </Box>
  );
};

export default Header;
