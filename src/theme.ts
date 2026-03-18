import { createTheme } from '@mui/material/styles';

// Updates the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true;
    subtitle: true;
    body: true;
    bodyLarge: true;
    bodySmall: true;
    label: true;
    caption: true;
    code: true;
    tag: true;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    title: React.CSSProperties;
    subtitle: React.CSSProperties;
    body: React.CSSProperties;
    bodyLarge: React.CSSProperties;
    bodySmall: React.CSSProperties;
    label: React.CSSProperties;
    caption: React.CSSProperties;
    code: React.CSSProperties;
    tag: React.CSSProperties;
  }

  // allows configuration using `createTheme()`
  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
    subtitle?: React.CSSProperties;
    body?: React.CSSProperties;
    bodyLarge?: React.CSSProperties;
    bodySmall?: React.CSSProperties;
    label?: React.CSSProperties;
    caption?: React.CSSProperties;
    code?: React.CSSProperties;
    tag?: React.CSSProperties;
  }
}

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
      secondary: '#808080',
    },
  },
  typography: {
    fontFamily: '"JetBrains Mono", monospace',
    title: {
      fontSize: '50px',
      fontWeight: 400,
    },
    subtitle: {
      fontSize: '32px',
      fontWeight: 400,
    },
    body: {
      fontSize: '16px',
      fontWeight: 400,
    },
    bodyLarge: {
      fontSize: '18px',
      fontWeight: 500,
    },
    bodySmall: {
      fontSize: '14px',
      fontWeight: 400,
    },
    label: {
      fontSize: '14px',
      fontWeight: 600,
    },
    caption: {
      fontSize: '13px',
      fontWeight: 300,
    },
    code: {
      fontSize: '14px',
      fontWeight: 300,
      fontStyle: 'italic',
    },
    tag: {
      fontSize: '12px',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#000',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: `rgba(49, 170, 141, 0.15)`,
          },
        }),
      },
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&:focus-visible': {
            outline: `2px solid ${theme.palette.primary.main}`,
            borderRadius: '2px',
          },
        }),
        underlineHover: true,
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: ({ theme }) => ({
          '& .MuiTouchRipple-root': {
            color: theme.palette.primary.main,
            opacity: 0.6,
          },
        }),
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          title: 'h1',
          subtitle: 'h2',
          body: 'p',
          bodyLarge: 'p',
          bodySmall: 'p',
          label: 'span',
          tag: 'span',
          code: 'span',
        },
      },
    },
  },
});

export default theme;
