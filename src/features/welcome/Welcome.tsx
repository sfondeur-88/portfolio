import Snackbar from '@/components/ui/core/Snackbar';
import AuroraGradient from '@/components/ui/design/AuroraGradient';
import SyntaxToken from '@/components/ui/design/SyntaxToken';
import TerminalCursorBlink from '@/components/ui/design/TerminalCursorBlink';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { Colours } from '@/theme';
import { emailAddress, LinkHrefs, socialLinks } from '@/utils/links';
import { ContentCopy, Email, OpenInNew } from '@mui/icons-material';
import { Box, Divider, IconButton, Link, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';

const Welcome = () => {
  const { copy, copied, handleClose } = useCopyToClipboard();

  useEffect(() => {
    document.title = "Welcome | Shane's Dev Portfolio";
  }, []);

  return (
    <Stack height="100%" justifyContent="center" alignItems="center" position="relative">
      <AuroraGradient width={375} height={375} position={{ top: 50, left: 20 }} colour="#6E9EFF" />
      <AuroraGradient
        width={425}
        height={425}
        position={{ bottom: 50, right: 50 }}
        colour="#66FFCC"
      />

      {/* Content card — constrained width so it never sprawls on wide screens,
          centred with generous padding so it holds together when the title wraps */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: { xs: '100%', sm: '640px' },
          px: { xs: '24px', sm: 6 },
          py: { xs: '24px', sm: 2 },
        }}
      >
        <Typography fontSize={{ xs: 15, sm: 20 }} fontWeight={400} fontStyle="italic">
          Hi there!!
        </Typography>

        <Typography variant="title">Welcome to my portfolio</Typography>

        <Typography variant="subtitle" color="secondary.main" sx={{ mt: 2, mb: { xs: 3, sm: 5 } }}>
          <TerminalCursorBlink />
          senior_front_end
        </Typography>

        {/* Desktop: code snippet style links */}
        <Box
          sx={{
            display: { xs: 'none', sm: 'block' },
            p: 2,
            backgroundColor: Colours.SnippetBackground,
            borderRadius: '16px',
            border: `1px solid ${Colours.SnippetBackground}`,
            overflowX: 'auto',
          }}
        >
          <Typography component="pre" variant="code" sx={{ lineHeight: 2, m: 0 }}>
            <span style={{ color: Colours.CommentGreen }}>{'// click the strings. trust me.'}</span>
            {'\n'}
            <SyntaxToken type="keyword">{'const '}</SyntaxToken>
            <SyntaxToken type="variable">{'linkedIn '}</SyntaxToken>
            {'= '}
            <Link
              href={LinkHrefs.LinkedIn}
              color={Colours.Orange}
              underline="hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SyntaxToken type="string">{'"linkedin.com/in/shane-fondeur";'}</SyntaxToken>
            </Link>
            {'\n'}
            <SyntaxToken type="keyword">{'const '}</SyntaxToken>
            <SyntaxToken type="variable">{'gitHub '}</SyntaxToken>
            {'= '}
            <Link
              href={LinkHrefs.GitHub}
              color={Colours.Orange}
              underline="hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SyntaxToken type="string">{'"github.com/sfondeur-88";'}</SyntaxToken>
            </Link>
            {'\n'}
            <SyntaxToken type="keyword">{'const '}</SyntaxToken>
            <SyntaxToken type="variable">{'emailAddress '}</SyntaxToken>
            {'= '}
            <Link
              onClick={() => copy(emailAddress)}
              component="button"
              color={Colours.Orange}
              underline="hover"
            >
              <SyntaxToken type="string">{'"shane@sfondeur.dev";'}</SyntaxToken>
            </Link>
          </Typography>
        </Box>

        {/* Mobile: tappable contact rows */}
        <Stack sx={{ display: { xs: 'flex', sm: 'none' } }}>
          {socialLinks.map(({ icon, href, label, handle }) => (
            <Box key={label}>
              <Stack
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                direction="row"
                alignItems="center"
                gap={1.5}
                sx={{
                  py: 1.5,
                  color: 'text.primary',
                  textDecoration: 'none',
                  '&:active': { opacity: 0.7 },
                }}
              >
                <Box sx={{ color: 'primary.main', display: 'flex' }}>{icon}</Box>
                <Typography variant="bodySmall" sx={{ flex: 1, color: 'text.secondary' }}>
                  {handle}
                </Typography>
                <OpenInNew sx={{ fontSize: 16, color: 'text.secondary', opacity: 0.5 }} />
              </Stack>
              <Divider sx={{ borderColor: 'divider' }} />
            </Box>
          ))}

          <Stack direction="row" alignItems="center" gap={1.5} sx={{ py: '2px' }}>
            <Box sx={{ color: 'primary.main', display: 'flex' }}>
              <Email />
            </Box>
            <Typography variant="bodySmall" sx={{ flex: 1, color: 'text.secondary' }}>
              {emailAddress}
            </Typography>
            <IconButton
              onClick={() => copy(emailAddress)}
              aria-label="Copy email address"
              sx={{ mr: -1, width: 44, height: 44 }}
            >
              <ContentCopy sx={{ fontSize: 20 }} />
            </IconButton>
          </Stack>
        </Stack>
      </Box>

      <Typography
        variant="subtitle"
        fontSize={{ xs: 28, sm: 46 }}
        textAlign="center"
        color="secondary.main"
        sx={{ mt: { xs: 4, sm: 8 }, position: 'relative', zIndex: 1 }}
      >
        {`Plz hire 🙏`}
      </Typography>

      <Snackbar message="Copied Email to clipboard!" open={copied} onClose={handleClose} />
    </Stack>
  );
};

export default Welcome;
