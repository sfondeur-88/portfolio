import { keyframes } from '@emotion/react';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

interface TypingTextProps {
  text: string;
  speed?: number; // millis per character.
}

const TypingText = ({ text, speed = 140 }: TypingTextProps) => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <>
      {displayed}
      <Box
        component="span"
        sx={{
          animation: done ? `${blink} 1.5s steps(1, start) infinite` : 'none',
          display: 'inline-block',
          ml: '2px',
          fontWeight: 300,
        }}
      >
        |
      </Box>
    </>
  );
};

export default TypingText;
