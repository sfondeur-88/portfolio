import { keyframes } from '@emotion/react';
import { Typography } from '@mui/material';

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const TerminalCursorBlink = () => {
  return (
    <Typography
      component="span"
      sx={{
        fontSize: '1.6rem',
        animation: `${blink} 1.5s steps(1, start) infinite`,
        display: 'inline-block',
      }}
    >
      {'>_'}
    </Typography>
  );
};

export default TerminalCursorBlink;