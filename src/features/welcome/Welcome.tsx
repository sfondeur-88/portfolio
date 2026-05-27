import Snackbar from '@/components/ui/core/Snackbar';
import AuroraGradient from '@/components/ui/design/AuroraGradient';
import SyntaxToken from '@/components/ui/design/SyntaxToken';
import TypingText from '@/components/ui/design/TypingText';
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
    <Stack
      minHeight="100%"
      justifyContent="center"
      alignItems="center"
      position="relative"
      sx={{ pt: '5vh', pb: '10vh' }}
    >
      <AuroraGradient
        width={{ xs: 180, sm: 375 }}
        height={{ xs: 180, sm: 375 }}
        position={{ top: { xs: 40, sm: 50 }, left: { xs: 0, sm: 20 } }}
        blur={{ xs: 70, sm: 150 }}
        colour="#6E9EFF"
      />
      <AuroraGradient
        width={{ xs: 200, sm: 425 }}
        height={{ xs: 200, sm: 425 }}
        position={{ bottom: { xs: 100, sm: 50 }, right: { xs: 0, sm: 50 } }}
        blur={{ xs: 70, sm: 150 }}
        colour="#66FFCC"
      />

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

        <Typography variant="title" fontSize={{ xs: 'clamp(26px, 6vw, 44px)' }}>
          Welcome to my portfolio
        </Typography>

        <Typography
          variant="subtitle"
          color="secondary.main"
          fontSize={{ xs: 'clamp(18px, 4vw, 24px)' }}
          sx={{ mt: 1, mb: { xs: 3, sm: 5 } }}
        >
          <TypingText text="Shane Fondeur" />
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
            <span style={{ color: Colours.CommentGreen }}>{'/**'}</span>
            {'\n'}
            <span style={{ color: Colours.CommentGreen }}>{' * @author  Shane Fondeur'}</span>
            {'\n'}
            <span style={{ color: Colours.CommentGreen }}>
              {' * @description  Frontend & Full Stack Engineer'}
            </span>
            {'\n'}
            <span style={{ color: Colours.CommentGreen }}>{' * @since   2016'}</span>
            {'\n'}
            <span style={{ color: Colours.CommentGreen }}>
              {" * @throws  {Error} if you don't hire me 🙏"}
            </span>
            {'\n'}
            <span style={{ color: Colours.CommentGreen }}>{' */'}</span>
            {'\n'}
            {'\n'}
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

        {/* Mobile: JSDoc block + tappable contact rows */}
        <Stack sx={{ display: { xs: 'flex', sm: 'none' } }}>
          <Box
            sx={{
              p: 1.5,
              mb: 2.5,
              backgroundColor: Colours.SnippetBackground,
              borderRadius: '12px',
              border: `1px solid ${Colours.SnippetBackground}`,
              overflowX: 'auto',
            }}
          >
            <Typography
              component="pre"
              variant="code"
              sx={{ lineHeight: 1.9, m: 0, fontSize: '12px' }}
            >
              <span style={{ color: Colours.CommentGreen }}>{'/**'}</span>
              {'\n'}
              <span style={{ color: Colours.CommentGreen }}>
                {' * @author       Shane Fondeur'}
              </span>
              {'\n'}
              <span style={{ color: Colours.CommentGreen }}>
                {' * @description  Frontend & Full Stack Engineer'}
              </span>
              {'\n'}
              <span style={{ color: Colours.CommentGreen }}>{' * @since        2016'}</span>
              {'\n'}
              <span style={{ color: Colours.CommentGreen }}>{' */'}</span>
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: Colours.SnippetBackground,
              borderRadius: '12px',
              border: `1px solid ${Colours.SnippetBackground}`,
              px: 1.5,
            }}
          >
            {socialLinks.map(({ icon, href, label, handle, colour }) => (
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
                  <Box sx={{ color: colour, display: 'flex' }}>{icon}</Box>
                  <Typography variant="bodySmall" sx={{ flex: 1, color: '#B0B8C1' }}>
                    {handle}
                  </Typography>
                  <OpenInNew sx={{ fontSize: 16, color: 'text.secondary', opacity: 0.5 }} />
                </Stack>
                <Divider sx={{ borderColor: 'divider' }} />
              </Box>
            ))}

            <Stack direction="row" alignItems="center" gap={1.5} sx={{ py: 1.5, height: 48 }}>
              <Box sx={{ color: Colours.Gmail, display: 'flex' }}>
                <Email />
              </Box>
              <Typography variant="bodySmall" sx={{ flex: 1, color: '#B0B8C1' }}>
                {emailAddress}
              </Typography>
              <IconButton
                onClick={() => copy(emailAddress)}
                aria-label="Copy email address"
                sx={{
                  mr: -1,
                  width: 44,
                  height: 44,
                  color: '#B0B8C1',
                  '&:hover': { color: Colours.Gmail },
                }}
              >
                <ContentCopy sx={{ fontSize: 20 }} />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>

      <Snackbar message="Copied Email to clipboard!" open={copied} onClose={handleClose} />
    </Stack>
  );
};

export default Welcome;
