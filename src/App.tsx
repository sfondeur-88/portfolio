import { Box, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import Footer from './components/layout/footer/Footer';
import Header from './components/layout/header/Header';
import Main from './components/layout/main/Main';
import theme from './theme';

function App() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          height: isMobile ? '100dvh' : 'calc(100vh - 16px)',
          maxWidth: '1700px',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: isMobile ? 0 : '8px',
          backgroundColor: 'background.default',
        }}
      >
        <Header />
        <Main />
        {!isMobile && <Footer />}
      </Box>
    </ThemeProvider>
  );
}

export default App;
