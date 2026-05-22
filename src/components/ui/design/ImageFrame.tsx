import { Box } from '@mui/material';

export const ImageFrame = ({
  src,
  alt,
  maxHeight,
}: {
  src: string;
  alt: string;
  maxHeight?: number;
}) => (
  <Box
    component="img"
    src={src}
    alt={alt}
    sx={{
      display: 'block',
      maxHeight: maxHeight ?? 'none',
      width: 'auto',
      maxWidth: '100%',
      height: 'auto',
      margin: '0 auto',
      borderRadius: '16px',
      border: `4px solid #2D3748`,
      boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
    }}
  />
);
