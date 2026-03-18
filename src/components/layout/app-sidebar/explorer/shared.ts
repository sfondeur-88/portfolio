import { Theme } from '@mui/material';
import { SystemStyleObject } from '@mui/system';

export const INDENT_PX = 16;

export const treeItemSx: SystemStyleObject<Theme> = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 0.75,
  py: 0.5,
  pr: 1,
  cursor: 'pointer',
  borderRadius: 0,
  color: 'text.secondary',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  '&:hover': { color: 'text.primary' },
};
