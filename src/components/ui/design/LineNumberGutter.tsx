import { Box } from '@mui/material';
import { useLayoutEffect, useRef, useState } from 'react';

const LINE_HEIGHT = 22;
const LINE_COUNT_DEFAULT = 22;

interface LineNumberGutterProps {
  children: React.ReactNode;
}

const LineNumberGutter = ({ children }: LineNumberGutterProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [lineCount, setLineCount] = useState<number>(LINE_COUNT_DEFAULT);

  useLayoutEffect(() => {
    if (!contentRef.current) return;

    const updateLineCount = () => {
      if (!contentRef.current) return;
      // Adds a small buffer
      const totalLines = Math.ceil(contentRef.current.scrollHeight / LINE_HEIGHT) + 2;
      setLineCount(Math.max(LINE_COUNT_DEFAULT, totalLines)); // Fallback.
    };

    updateLineCount();

    const observer = new ResizeObserver(updateLineCount);
    observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, [children]);

  return (
    <Box
      sx={{ display: 'flex', flex: 1, minHeight: 0, overflow: 'auto', scrollbarGutter: 'stable' }}
    >
      <Box
        aria-hidden="true"
        sx={{
          minWidth: '48px',
          textAlign: 'right',
          pr: 2,
          pt: 3,
          userSelect: 'none',
          fontSize: '13px',
          lineHeight: `${LINE_HEIGHT}px`,
          color: '#3A4A5A',
          flexShrink: 0,
          opacity: 0.6,
        }}
      >
        {Array.from({ length: lineCount }, (_, i) => (
          <Box key={i}>{i + 1}</Box>
        ))}
      </Box>

      <Box ref={contentRef} sx={{ flex: 1, minWidth: 0 }}>
        {children}
      </Box>
    </Box>
  );
};

export default LineNumberGutter;
