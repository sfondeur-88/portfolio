import { ChevronRight, ExpandMore, FolderOpenRounded, FolderRounded } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import { JSX, useState } from 'react';
import { ExplorerFile, ExplorerFolder } from './explorer-tree';
import { INDENT_PX, treeItemSx } from './shared';

interface Props {
  folder: ExplorerFolder;
  depth: number;
  renderNode: (node: ExplorerFolder | ExplorerFile, depth: number) => JSX.Element;
}

// TODO:Shane - when folder is opened and/or on same route, show it in the folder styling (bg or font)
const ExplorerFolderItem = (props: Props) => {
  const { folder, depth, renderNode } = props;

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleFolder = () => setIsOpen((prev) => !prev);

  return (
    <Box
      key={folder.label}
      sx={{
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          left: `${INDENT_PX * depth + 11.47}px`,
          top: '28px',
          bottom: 0,
          width: '1px',
          backgroundColor: 'divider',
          opacity: isOpen ? 1 : 0,
          transition: 'opacity 0.1s ease',
        },
      }}
    >
      <Box onClick={toggleFolder} sx={[treeItemSx, { ml: `${INDENT_PX * depth}px` }]}>
        {isOpen ? (
          <>
            <ExpandMore sx={{ color: 'text.secondary' }} />
            <FolderOpenRounded sx={{ color: 'primary.main' }} />
          </>
        ) : (
          <>
            <ChevronRight sx={{ color: 'text.secondary' }} />
            <FolderRounded sx={{ color: 'primary.main' }} />
          </>
        )}
        <Typography variant="body">{folder.label}</Typography>
      </Box>

      <Collapse in={isOpen}>
        {folder.children.map((child) => renderNode(child, depth + 1))}
      </Collapse>
    </Box>
  );
};

export default ExplorerFolderItem;
