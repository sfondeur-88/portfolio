import TrafficLightButton from '@/components/ui/design/TrafficLightButton';
import FullscreenIcon from '@/components/ui/icons/FullscreenIcon';
import { HEADER_HEIGHT } from '@/utils/layout';
import { Close, Remove } from '@mui/icons-material';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        height: HEADER_HEIGHT,
        display: 'flex',
        flexShrink: 0,
        alignItems: 'center',
        position: 'relative',
        paddingX: 1.5,
        borderTop: '1px solid',
        borderLeft: '1px solid',
        borderRight: '1px solid',
        borderColor: 'divider',
        borderBottomWidth: { xs: '1px', sm: 0 },
        borderBottomStyle: 'solid',
        borderBottomColor: 'divider',
        borderRadius: '8px 8px 0px 0px',
      }}
    >
      <Box sx={{ display: 'flex', gap: 1.5, padding: 1, '&:hover svg': { opacity: 1 } }}>
        <TrafficLightButton colour="#FF5252" icon={<Close />} />
        <TrafficLightButton colour="#FFBC42" icon={<Remove />} />
        <TrafficLightButton colour="#2DBF2D" icon={<FullscreenIcon />} />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          paddingX: { xs: '20px', sm: 5 },
          paddingY: '2px',
          border: '1px solid',
          borderColor: '#1d2a37',
          borderRadius: '6px',
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
          whiteSpace: 'nowrap',
        }}
      >
        <Typography variant="bodySmall" fontWeight={700} color="primary">
          shane_fondeur
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
