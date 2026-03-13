import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ExplorerContent = () => {
  return (
    <Box>
      <Typography variant="label" sx={{ p: 2, display: 'block' }}>
        EXPLORER
      </Typography>
      {/* file tree goes here */}
    </Box>
  );
};

export default ExplorerContent;
