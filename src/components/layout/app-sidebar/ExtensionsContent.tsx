import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ExtensionsContent = () => {
  return (
    <Box>
      <Typography
        variant="label"
        sx={{
          p: 2,
          display: 'block',
          letterSpacing: '0.08em',
          color: 'text.secondary',
        }}
      >
        HOBBIES
      </Typography>
      {/* list of hobbies made to look like extensions installed? */}
    </Box>
  );
};

export default ExtensionsContent;
