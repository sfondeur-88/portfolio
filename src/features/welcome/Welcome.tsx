import { Check } from "@mui/icons-material";
import { Link, Slide, Snackbar, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import SyntaxToken from "../../components/ui/design/SyntaxToken";
import TerminalCursorBlink from "../../components/ui/design/TerminalCursorBlink";
import { useCopyToClipboard } from "../../hooks/useCopyToClipboard";
import { Colours } from "../../theme";
import { emailAddress, LinkHrefs } from "../../utils/links";

const Welcome = () => {
  const { copy, copied, handleClose } = useCopyToClipboard();

  useEffect(() => {
    document.title = "Welcome | Shane's Dev Portfolio";
  }, []);

  return (
    <Stack
      sx={{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // position: 'relative',
      }}
    >
      <div>
        <Typography>Hi there!!</Typography>

        <Typography variant="h1" fontSize={56}>Welcome to my portfolio</Typography>

        <Typography variant="h2" fontSize={32} sx={{ mt: 2, mb: 6, color: 'secondary.main' }}>
          <TerminalCursorBlink />
          senior_front_end_engineer
        </Typography>

        <Stack gap={1}>
          <Typography>
            <SyntaxToken type="keyword">const </SyntaxToken>
            <SyntaxToken type="variable">linkedIn </SyntaxToken>
            {'= '}
            <Link href={LinkHrefs.LinkedIn} color={Colours.Orange} underline="hover" target="_blank" rel="noopener noreferrer">
              <SyntaxToken type="string">"linkedin.com/in/shane-fondeur";</SyntaxToken>
            </Link>
          </Typography>

          <Typography>
            <SyntaxToken type="keyword">const </SyntaxToken>
            <SyntaxToken type="variable">gitHub </SyntaxToken>
            {'= '}
            <Link href={LinkHrefs.GitHub} color={Colours.Orange} underline="hover" target="_blank" rel="noopener noreferrer">
              <SyntaxToken type="string">"github.com/sfondeur-88";</SyntaxToken>
            </Link>
          </Typography>

          <Typography>
            <SyntaxToken type="keyword">const </SyntaxToken>
            <SyntaxToken type="variable">emailAddress </SyntaxToken>
            {'= '}
            <Link onClick={() => copy(emailAddress)} component="button" color={Colours.Orange} underline="hover">
              <SyntaxToken type="string">"shane@sfondeur.dev";</SyntaxToken>
            </Link>

          </Typography>
        </Stack>

        <Typography
          variant="h2"
          fontSize={46}
          textAlign="center"
          sx={{ mt: 10, color: 'secondary.main' }}
        >
          {`Plz hire 🙏`}
        </Typography>
      </div>

      {/* TODO:Shane - move to ui components and reuse with footer. */}
      <Snackbar
        open={copied}
        onClose={handleClose}
        autoHideDuration={3500}
        message={
          <Stack direction="row" alignItems="center" gap={1}>
            <Check fontSize="small" sx={{ color: 'secondary.main' }} />
            <Typography>Copied Email to clipboard!</Typography>
          </Stack>
        }
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        slots={{ transition: Slide }}
        slotProps={{
          content: {
            sx: {
              color: 'primary.main',
              backgroundColor: '#0D2137',
              border: '1px solid',
              borderLeft: `3px solid`,
              borderColor: 'divider',
              borderLeftColor: 'primary.main',
              borderRadius: '6px',
            }
          },
        }}
      />
    </Stack>
  );
};

export default Welcome;