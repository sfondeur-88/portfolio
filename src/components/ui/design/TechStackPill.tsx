import { Box, SvgIconProps, Typography } from '@mui/material';

interface TechStackPillProps {
  icon: React.ComponentType<SvgIconProps>;
  name: string;
}

export const TechStackPill = ({ icon: Icon, name }: TechStackPillProps) => (
  <Box
    sx={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 1,
      px: 1.5,
      py: 0.5,
      borderRadius: '20px',
      backgroundColor: '#1E293B',
      border: '1px solid #334155',
      color: '#E2E8F0',
    }}
  >
    <Icon sx={{ fontSize: '16px', display: 'block' }} />
    <Typography sx={{ fontSize: '13px', fontWeight: 500 }}>{name}</Typography>
  </Box>
);
