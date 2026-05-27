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
        borderRight: '1px solid',
        borderColor: '#1d2a37',
        backgroundColor: 'background.default',
        transition: 'width 0.15s ease',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          width: 280,
          height: '100%',
          overflowY: 'auto',
          display: activePanel === 'explorer' ? 'block' : 'none',
        }}
      >
        <ExplorerContent />
      </Box>
      <Box
        sx={{
          width: 280,
          height: '100%',
          overflowY: 'auto',
          display: activePanel === 'extensions' ? 'block' : 'none',
        }}
      >
        <ExtensionsContent />
      </Box>
    </Box>
  );
};

export default ExplorerPanel;
