import LineNumberGutter from '@/components/ui/design/LineNumberGutter';
import theme from '@/theme';
import { Box, Stack, useMediaQuery } from '@mui/material';
import { useLayoutEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router';
import TabBar from './TabBar';

const CodeEditor = () => {
  const { pathname, hash } = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const showGutter = pathname !== '/welcome';
  const welcomeScrollRef = useRef<HTMLDivElement>(null);

  // Scroll the welcome page container back to top on route change.
  // Pages with a gutter handle this inside LineNumberGutter.
  useLayoutEffect(() => {
    if (!hash && !showGutter && welcomeScrollRef.current) {
      welcomeScrollRef.current.scrollTop = 0;
    }
  }, [pathname, hash, showGutter]);

  return (
    <Stack style={{ flex: 1, minHeight: 0, minWidth: 0, width: 0 }}>
      {!isMobile && <TabBar />}
      {showGutter ? (
        <LineNumberGutter>
          <Outlet />
        </LineNumberGutter>
      ) : (
        <Box ref={welcomeScrollRef} sx={{ flex: 1, minHeight: 0, overflow: 'auto' }}>
          <Outlet />
        </Box>
      )}
    </Stack>
  );
};

export default CodeEditor;
