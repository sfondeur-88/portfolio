import { Email } from '@mui/icons-material';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { useCopyToClipboard } from '../../../hooks/useCopyToClipboard';
import { FOOTER_HEIGHT } from '../../../utils/layout';
import { emailAddress, socialLinks } from '../../../utils/links';
import Snackbar from '../../ui/core/Snackbar';

const Footer = () => {
  const { copy, copied, handleClose } = useCopyToClipboard();

  return (
    <Box
      component="footer"
      sx={{
        height: FOOTER_HEIGHT,
        zIndex: 1000,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '0px 0px 8px 8px',
        backgroundColor: 'background.default',
      }}
    >
      <Stack direction="row" alignItems="center" height="100%" gap={2}>
        <Box
          sx={{
            width: '160px',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingX: 1,
            borderRight: '1px solid',
            borderRightColor: 'divider',
          }}
        >
          <Typography component="span" fontSize={14} fontWeight={600}>
            find_me_at:
          </Typography>
        </Box>

        {socialLinks.map(({ Icon, href }) => (
          <IconButton key={href} href={href} target="_blank" rel="noopener noreferrer">
            <Icon />
          </IconButton>
        ))}
        <IconButton onClick={() => copy(emailAddress)}>
          <Email />
        </IconButton>
      </Stack>

      <Snackbar message="Copied Email to clipboard!" open={copied} onClose={handleClose} />
    </Box>
  );
};

export default Footer;
