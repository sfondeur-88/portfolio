import ReactIcon from '@/components/ui/icons/ReactIcon';
import { useNavigateToSection } from '@/hooks/useNavigateToSection';
import { Theme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SystemStyleObject } from '@mui/system';
import { useLocation, useNavigate } from 'react-router';
import { ExplorerFile } from './explorer-tree';
import { INDENT_PX, treeItemSx } from './shared';

interface Props {
  file: ExplorerFile;
  depth: number;
}

// For "skip to" sections - MoveDown, DoubleArrow, KeyboardDouble
const ExplorerFileItem = (props: Props) => {
  const { file, depth } = props;

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { goToSection } = useNavigateToSection();

  const isActive = pathname === file.path;
  const hasSections = file.sections && file.sections.length > 0;

  return (
    <Box key={file.path}>
      <Box
        onClick={() => navigate(file.path)}
        sx={[
          treeItemSx,
          { fontSize: 14, ml: `${INDENT_PX * depth + 45}px` },
          isActive && activeFileSx,
        ]}
      >
        <ReactIcon fontSize="inherit" />
        <Typography variant="bodySmall">{file.label}</Typography>
      </Box>

      <>
        {hasSections &&
          file.sections?.map((section) => (
            <Box
              key={section.id}
              onClick={() => goToSection(file.path, section.id, pathname)}
              sx={[
                treeItemSx,
                {
                  ml: `${INDENT_PX * (depth + 1) + 49}px`,
                  color: 'text.secondary',
                  '&:hover': { ...activeFileSx },
                },
              ]}
            >
              <Typography variant="caption" sx={{ color: '#505050' }}>
                #
              </Typography>
              <Typography variant="caption">{section.label}</Typography>
            </Box>
          ))}
      </>
    </Box>
  );
};

const activeFileSx: SystemStyleObject<Theme> = {
  // backgroundColor: 'action.selected',
  color: 'text.primary',
};

export default ExplorerFileItem;
