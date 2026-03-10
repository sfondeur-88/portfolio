import { Check } from '@mui/icons-material';
import {
  Snackbar as MuiSnackbar,
  Slide,
  SnackbarProps,
  Stack,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';

interface Props extends Omit<SnackbarProps, 'message'> {
  message: string;
}

const Snackbar = (props: Props) => {
  const { message, slotProps } = props;

  return (
    <MuiSnackbar
      autoHideDuration={3500}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
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
          <Check fontSize="small" sx={{ color: 'secondary.main' }} />
          <Typography>{message}</Typography>
        </Stack>
      }
    />
  );
};

export default Snackbar;
