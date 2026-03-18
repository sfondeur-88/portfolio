import { CssBaseline, ThemeProvider } from '@mui/material';
import Footer from './components/layout/footer/Footer';
import HeaderNew from './components/layout/header/Header';
import Main from './components/layout/main/Main';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          height: 'calc(100vh - 16px)', // 4px padding on body.
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '8px',
          backgroundColor: theme.palette.background.default,
        }}
      >
        <HeaderNew />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
