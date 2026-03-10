import Snackbar from '@/components/ui/core/Snackbar';
import SyntaxToken from '@/components/ui/design/SyntaxToken';
import TerminalCursorBlink from '@/components/ui/design/TerminalCursorBlink';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { Colours } from '@/theme';
import { emailAddress, LinkHrefs } from '@/utils/links';
import { Link, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';

const Welcome = () => {
  const { copy, copied, handleClose } = useCopyToClipboard();

  useEffect(() => {
    document.title = "Welcome | Shane's Dev Portfolio";
  }, []);

  return (
    <div>
      {/* TODO:Shane - adjust margins/gaps between these. */}
      <Typography fontSize={20} fontWeight={400} fontStyle={'italic'}>
        Hi there!!
      </Typography>

      <Typography variant="title">Welcome to my portfolio</Typography>

      <Typography variant="subtitle" color="secondary.main" sx={{ mt: 2, mb: 6 }}>
        <TerminalCursorBlink />
        senior_front_end_engineer
      </Typography>

      <Stack gap={1}>
        <Typography>
          <SyntaxToken type="keyword">const </SyntaxToken>
          <SyntaxToken type="variable">linkedIn </SyntaxToken>
          {'= '}
          <Link
            href={LinkHrefs.LinkedIn}
            color={Colours.Orange}
            underline="hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SyntaxToken type="string">"linkedin.com/in/shane-fondeur";</SyntaxToken>
          </Link>
        </Typography>

        <Typography>
          <SyntaxToken type="keyword">const </SyntaxToken>
          <SyntaxToken type="variable">gitHub </SyntaxToken>
          {'= '}
          <Link
            href={LinkHrefs.GitHub}
            color={Colours.Orange}
            underline="hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SyntaxToken type="string">"github.com/sfondeur-88";</SyntaxToken>
          </Link>
        </Typography>

        <Typography>
          <SyntaxToken type="keyword">const </SyntaxToken>
          <SyntaxToken type="variable">emailAddress </SyntaxToken>
          {'= '}
          <Link
            onClick={() => copy(emailAddress)}
            component="button"
            color={Colours.Orange}
            underline="hover"
          >
            <SyntaxToken type="string">"shane@sfondeur.dev";</SyntaxToken>
          </Link>
        </Typography>
      </Stack>

      <Typography
        variant="subtitle"
        fontSize={46}
        textAlign="center"
        color="secondary.main"
        sx={{ mt: 10 }}
      >
        {`Plz hire 🙏`}
      </Typography>
      <Snackbar message="Copied Email to clipboard!" open={copied} onClose={handleClose} />
    </div>
  );
};

export default Welcome;
