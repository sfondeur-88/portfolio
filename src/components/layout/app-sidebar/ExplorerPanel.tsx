import { Box } from '@mui/material';
import { TogglePanelId } from './ActivityBar';
import ExtensionsContent from './ExtensionsContent';
import ExplorerContent from './explorer/ExplorerContent';

interface ExplorerPanelProps {
  activePanel: TogglePanelId | null;
}

const ExplorerPanel = ({ activePanel }: ExplorerPanelProps) => {
  return (
    <Box
      sx={{
        width: activePanel ? 280 : 0,
        // TODO:Shane - decide if we need: overflow: 'hidden' still
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
