import { Mood, TerminalOutlined, WavingHand } from '@mui/icons-material';
import { Box, Stack, Tab, Tabs as TabItems } from '@mui/material';
import { ReactElement } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { ROUTE_PATHS } from '../../../routes/paths';
import { HEADER_HEIGHT } from '../../../utils/layout';

type TabItems = {
  label: string;
  path: string;
  icon: ReactElement;
};

const tabItems: TabItems[] = [
  { label: 'Welcome.tsx', path: ROUTE_PATHS.WELCOME, icon: <WavingHand fontSize="small" /> },
  { label: 'AboutMe.tsx', path: ROUTE_PATHS.ABOUT_ME, icon: <Mood fontSize="small" /> },
  {
    label: 'Experience.tsx',
    path: ROUTE_PATHS.EXPERIENCE,
    icon: <TerminalOutlined fontSize="small" />,
  },
];

const TabBar = () => {
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
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.default',
        zIndex: 1000,
      }}
    >
      <Stack direction="row">
        <TabItems
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
          {tabItems.map((tab) => (
            <Tab
              key={tab.label}
              value={tab.path}
              label={tab.label}
              icon={tab.icon}
              iconPosition="start"
            />
          ))}
        </TabItems>
      </Stack>
    </Box>
  );
};

export default TabBar;
