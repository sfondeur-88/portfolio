import { ChevronRight } from '@mui/icons-material';
import FolderOpenRounded from '@mui/icons-material/FolderOpenRounded';
import FolderRounded from '@mui/icons-material/FolderRounded';
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
          height: 'auto',
          position: 'absolute',
          left: `${INDENT_PX * depth + 11.47}px`,
          top: '28px',
          bottom: 0,
          backgroundColor: '#4a6882',
          transformOrigin: 'top',
          transform: isOpen ? 'scaleY(1)' : 'scaleY(0)',
          transition: isOpen
            ? 'transform 250ms ease 50ms, opacity 200ms ease 50ms'
            : 'transform 300ms ease 50ms, opacity 150ms ease-out 50ms',
        },
      }}
    >
      <Box onClick={toggleFolder} sx={[treeItemSx, { ml: `${INDENT_PX * depth}px` }]}>
        <ChevronRight
          sx={{
            color: 'text.secondary',
            transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 100ms ease-in-out',
          }}
        />
        {isOpen ? (
          <FolderOpenRounded sx={{ color: 'primary.main' }} />
        ) : (
          <FolderRounded sx={{ color: 'primary.main' }} />
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
