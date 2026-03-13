import TrafficLightButton from '@/components/ui/design/TrafficLightButton';
import FullscreenIcon from '@/components/ui/icons/FullscreenIcon';
import { Close, Remove } from '@mui/icons-material';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const Header = () => {
  const onTrafficLightClick = () => {
    // TODO:Shane - Easter egg when clicked
  };

  return (
    <Box
      sx={{
        height: 40,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingX: 1.5,
        borderTop: '1px solid',
        borderLeft: '1px solid',
        borderRight: '1px solid',
        borderColor: 'divider',
        borderRadius: '8px 8px 0px 0px',
      }}
    >
      <Box sx={{ display: 'flex', gap: 1.5, padding: 1, '&:hover svg': { opacity: 1 } }}>
        <TrafficLightButton colour="#FF5252" handleClick={onTrafficLightClick} icon={<Close />} />
        <TrafficLightButton colour="#FFBC42" handleClick={onTrafficLightClick} icon={<Remove />} />
        <TrafficLightButton
          colour="#2DBF2D"
          handleClick={onTrafficLightClick}
          icon={<FullscreenIcon />}
        />
      </Box>

      {/* TODO:Shane - Search/Input-lookalike area to wrap the name */}
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          // border: '1px solid',
        }}
      >
        <Typography variant="body" fontWeight={700} color="primary">
          shane_fondeur
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
