import { Box } from '@mui/material';
import { useRef } from 'react';

const LINE_HEIGHT = 22;

interface LineNumberGutterProps {
  children: React.ReactNode;
}

const LineNumberGutter = ({ children }: LineNumberGutterProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  // TODO:Shane - Plan the line number feature again, or use static values.
  // const [lineCount, setLineCount] = useState<number>(50);

  // useEffect(() => {
  //   if (!contentRef.current) return;

  //   const observer = new ResizeObserver(() => {
  //     if (!contentRef.current) return;
  //     setLineCount(Math.ceil(contentRef.current.scrollHeight / LINE_HEIGHT));
  //   });

  //   observer.observe(contentRef.current);
  //   return () => observer.disconnect();
  // }, []);

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
        {Array.from({ length: 70 }, (_, i) => (
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
