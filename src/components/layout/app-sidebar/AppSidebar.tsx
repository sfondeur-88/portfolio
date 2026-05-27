import { ROUTE_PATHS } from '@/routes/paths';
import theme from '@/theme';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useMediaQuery } from '@mui/material';
import ActivityBar, { TogglePanelId } from './ActivityBar';
import ExplorerPanel from './ExplorerPanel';

const AppSidebar = () => {
  const { pathname } = useLocation();
  const isNarrow = useMediaQuery(theme.breakpoints.down('md'));

  const [activePanel, setActivePanel] = useState<TogglePanelId | null>(
    pathname !== ROUTE_PATHS.WELCOME && !isNarrow ? 'explorer' : null,
  );

  // Auto-collapse the explorer panel when the viewport shrinks below md.
  // Never auto-reopen — let the user decide when to open it again.
  useEffect(() => {
    if (isNarrow) {
      setActivePanel(null);
    }
  }, [isNarrow]);

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
