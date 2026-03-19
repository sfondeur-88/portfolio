import { ChevronRight, ExpandMore } from '@mui/icons-material';
import { Box, Collapse, Typography } from '@mui/material';
import { useState } from 'react';
import { ExplorerFile, ExplorerFolder, explorerTree } from './explorer-tree';
import ExplorerFileItem from './ExplorerFileItem';
import ExplorerFolderItem from './ExplorerFolderItem';
import { INDENT_PX, treeItemSx } from './shared';

const ExplorerContent = () => {
  const [rootFolderOpen, setRootFolderOpen] = useState<boolean>(true);

  const renderNode = (node: ExplorerFolder | ExplorerFile, depth: number) => {
    if (node.type === 'file') {
      return <ExplorerFileItem key={node.path} file={node} depth={depth} />;
    }
    return (
      <ExplorerFolderItem key={node.label} folder={node} depth={depth} renderNode={renderNode} />
    );
  };

  return (
    <Box>
      <Typography
        variant="label"
        sx={{ p: 2, display: 'block', letterSpacing: '0.08em', color: 'text.secondary' }}
      >
        EXPLORER
      </Typography>

      {/* Root  `> shane_fondeur` */}
      <Box
        onClick={() => setRootFolderOpen((prev) => !prev)}
        sx={[treeItemSx, { ml: `${INDENT_PX}px` }]}
      >
        {rootFolderOpen ? (
          <ExpandMore sx={{ color: 'text.secondary' }} />
        ) : (
          <ChevronRight sx={{ color: 'text.secondary' }} />
        )}
        <Typography variant="body" fontWeight={500} color="text.primary">
          {explorerTree.rootLabel}
        </Typography>
      </Box>

      {/* 2nd level folders (/pages, etc) */}
      <Collapse in={rootFolderOpen}>
        {explorerTree.folders.map((folder) => renderNode(folder, 2))}
      </Collapse>
    </Box>
  );
};

export default ExplorerContent;
