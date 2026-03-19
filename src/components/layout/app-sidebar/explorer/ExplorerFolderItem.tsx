import { ChevronRight, ExpandMore, FolderOpenRounded, FolderRounded } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import { JSX, useState } from 'react';
import { useLocation } from 'react-router';
import { ExplorerFile, ExplorerFolder } from './explorer-tree';
import { INDENT_PX, treeItemSx } from './shared';

// Check if folder contains an active route path.
const containsActivePath = (folder: ExplorerFolder, pathname: string): boolean => {
  return folder.children.some((child) => {
    if (child.type === 'file') return child.path === pathname;
    return containsActivePath(child, pathname);
  });
};

interface Props {
  folder: ExplorerFolder;
  depth: number;
  renderNode: (node: ExplorerFolder | ExplorerFile, depth: number) => JSX.Element;
}

const ExplorerFolderItem = (props: Props) => {
  const { folder, depth, renderNode } = props;

  const { pathname } = useLocation();
  const isActive = containsActivePath(folder, pathname);

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleFolder = () => setIsOpen((prev) => !prev);

  const showIndentGuide = depth > 2;

  return (
    <Box
      key={folder.label}
      sx={{
        position: 'relative',
        '&::before': {
          content: '""',
          opacity: showIndentGuide && isOpen && isActive ? 1 : 0,
          width: '1.5px',
          position: 'absolute',
          left: `${INDENT_PX * depth + 11.47}px`,
          top: '28px',
          bottom: 0,
          backgroundColor: '#4a6882',
          transition: 'opacity 0.2s ease',
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
