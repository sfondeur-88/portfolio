import { ROUTE_PATHS } from '@/routes/paths';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useLocation } from 'react-router';
import ActivityBar, { TogglePanelId } from './ActivityBar';
import ExplorerPanel from './ExplorerPanel';

const AppSidebar = () => {
  const { pathname } = useLocation();

  const [activePanel, setActivePanel] = useState<TogglePanelId | null>(
    pathname !== ROUTE_PATHS.WELCOME ? 'explorer' : null,
  );

  const handleTogglePanel = (id: TogglePanelId) => {
    setActivePanel((prev) => (prev === id ? null : id));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', height: '100%', flexShrink: 0 }}>
      <ActivityBar activePanel={activePanel} onTogglePanel={handleTogglePanel} />
      <ExplorerPanel activePanel={activePanel} />
    </Box>
  );
};

export default AppSidebar;
