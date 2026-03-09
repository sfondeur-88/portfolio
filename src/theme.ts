import { createTheme } from '@mui/material/styles';
import { CSSProperties } from 'react';

export const CODE_FONT: CSSProperties['fontFamily'] = 'monospace';

export enum Colours {
  Blue = '#4B59C9',
  Orange = '#CC837C',
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#31AA8D',
    },
    secondary: {
      main: '#C678DD',
    },
    background: {
      default: '#021628',
      paper: '#021628',
    },
    divider: '#293B4D',
    text: {
      primary: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'JetBrains Mono',
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: `rgba(49, 170, 141, 0.15)`,
          }
        })
      }
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&:focus-visible': {
            outline: `2px solid ${theme.palette.primary.main}`,
            borderRadius: '2px',
          }
        }),
        underlineHover: true,
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: ({ theme }) => ({
          '& .MuiTouchRipple-root': {
            color: theme.palette.primary.main,
            opacity: 0.7,
          }
        }),
      }
    },
  },
});

export default theme;