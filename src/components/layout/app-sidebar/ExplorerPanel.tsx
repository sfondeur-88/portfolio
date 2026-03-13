import { Box } from '@mui/material';
import { TogglePanelId } from './ActivityBar';
import ExplorerContent from './ExplorerContent';
import ExtensionsContent from './ExtensionsContent';

interface ExplorerPanelProps {
  activePanel: TogglePanelId | null;
}

const ExplorerPanel = ({ activePanel }: ExplorerPanelProps) => {
  return (
    <Box
      sx={{
        width: activePanel ? 240 : 0,
        overflow: 'hidden',
        borderRight: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.default',
        transition: 'width 0.15s ease',
      }}
    >
      {activePanel === 'explorer' && <ExplorerContent />}
      {activePanel === 'extensions' && <ExtensionsContent />}
    </Box>
  );
};

export default ExplorerPanel;
