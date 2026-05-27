import { Check } from '@mui/icons-material';
import {
  Snackbar as MuiSnackbar,
  Slide,
  SnackbarProps,
  Stack,
  SxProps,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import theme from '@/theme';

interface Props extends Omit<SnackbarProps, 'message'> {
  message: string;
}

const Snackbar = (props: Props) => {
  const { message, slotProps } = props;
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <MuiSnackbar
      autoHideDuration={3500}
      anchorOrigin={isMobile ? { vertical: 'top', horizontal: 'center' } : { vertical: 'bottom', horizontal: 'right' }}
      slots={{ transition: Slide }}
      {...props}
      slotProps={{
        ...slotProps,
        content: {
          sx: {
            color: 'primary.main',
            backgroundColor: '#0D2137',
            border: '1px solid',
            borderLeft: `3px solid`,
            borderColor: 'divider',
            borderLeftColor: 'primary.main',
            borderRadius: '6px',
            ...(slotProps?.content as { sx?: SxProps<Theme> })?.sx,
          },
        },
      }}
      message={
        <Stack direction="row" alignItems="center" gap={1}>
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              backgroundColor: 'rgba(49, 170, 141, 0.15)',
              border: '1.5px solid',
              borderColor: 'primary.main',
              flexShrink: 0,
            }}
          >
            <Check sx={{ fontSize: 16, color: 'primary.main' }} />
          </Stack>
          <Typography>{message}</Typography>
        </Stack>
      }
    />
  );
};

export default Snackbar;
