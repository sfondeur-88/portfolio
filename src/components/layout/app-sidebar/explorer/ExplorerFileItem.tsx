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

// TODO:Shane - file starting icon/logo needed (react, ts, etc).
const ExplorerFileItem = (props: Props) => {
  const { file, depth } = props;

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { goToSection } = useNavigateToSection();

  const isActive = pathname === file.path;

  return (
    <Box key={file.path}>
      <Box
        onClick={() => navigate(file.path)}
        sx={[treeItemSx, { ml: `${INDENT_PX * depth + 45}px` }, isActive && activeFileSx]}
      >
        <Typography variant="bodySmall">{file.label}</Typography>
      </Box>

      {isActive &&
        file.sections?.map((section) => (
          <Box
            key={section.id}
            onClick={() => goToSection(file.path, section.id, pathname)}
            sx={[treeItemSx, { ml: `${INDENT_PX * (depth + 1)}px` }]}
          >
            <Typography variant="body" color="text.secondary">
              {section.label}
            </Typography>
          </Box>
        ))}
    </Box>
  );
};

const activeFileSx: SystemStyleObject<Theme> = {
  backgroundColor: 'action.selected',
  color: 'text.primary',
};

export default ExplorerFileItem;
