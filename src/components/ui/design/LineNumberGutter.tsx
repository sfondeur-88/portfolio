import { Box } from '@mui/material';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';

const LINE_HEIGHT = 22;
const LINE_COUNT_DEFAULT = 22;

interface LineNumberGutterProps {
  children: React.ReactNode;
}

const LineNumberGutter = ({ children }: LineNumberGutterProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lineCount, setLineCount] = useState<number>(LINE_COUNT_DEFAULT);
  const { pathname } = useLocation();

  // Reset scroll to top and clear stale line count on route change.
  // Both happen before paint so there's no flicker.
  useLayoutEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    setLineCount(LINE_COUNT_DEFAULT);
  }, [pathname]);

  // Measure after the browser has finished layout. ResizeObserver handles all
  // subsequent reflows (images loading, fonts, etc.) automatically.
  useEffect(() => {
    if (!contentRef.current) return;

    const updateLineCount = () => {
      if (!contentRef.current) return;
      const totalLines = Math.ceil(contentRef.current.scrollHeight / LINE_HEIGHT) + 2;
      setLineCount(Math.max(LINE_COUNT_DEFAULT, totalLines));
    };

    // rAF ensures the browser has painted the new content before we read scrollHeight.
    const raf = requestAnimationFrame(updateLineCount);

    const observer = new ResizeObserver(updateLineCount);
    observer.observe(contentRef.current);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <Box
      ref={scrollRef}
      sx={{
        display: 'flex',
        flex: 1,
        minHeight: 0,
        overflow: 'scroll',
        scrollbarGutter: { xs: 'auto', sm: 'stable' },
        scrollbarWidth: 'thin',
        scrollbarColor: '#2D3F50 transparent',
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          minWidth: { xs: '32px', sm: '48px' },
          textAlign: 'right',
          pl: { xs: '2px', sm: 0 },
          pr: { xs: 1, sm: 2 },
          pt: 3,
          userSelect: 'none',
          fontSize: { xs: '10px', sm: '13px' },
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

      <Box ref={contentRef} sx={{ flex: 1, minWidth: 0, pr: { xs: 1, sm: 0 } }}>
        {children}
      </Box>
    </Box>
  );
};

export default LineNumberGutter;
