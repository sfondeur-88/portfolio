import { ImageFrame } from '@/components/ui/design/ImageFrame';
import { TechStackPill } from '@/components/ui/design/TechStackPill';
import { AwsIcon } from '@/components/ui/icons/AwsIcon';
import { MaterialUiIcon } from '@/components/ui/icons/MaterialUiIcon';
import { NestJsIcon } from '@/components/ui/icons/NestJsIcon';
import { PostgresIcon } from '@/components/ui/icons/PostgresIcon';
import { ReactIcon } from '@/components/ui/icons/ReactIcon';
import { TailwindIcon } from '@/components/ui/icons/TailwindIcon';
import { TypeScriptIcon } from '@/components/ui/icons/TypescriptIcon';
import { Colours } from '@/theme';
import { LinkHrefs } from '@/utils/links';
import { Box, Grid, Link } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const HootReadingSection = () => {
  return (
    <section id="hoot-reading">
      <Typography variant="subtitle" color="text" sx={{ fontSize: '24px', mb: 1 }}>
        // Hoot Reading
      </Typography>
      <Box
        sx={{
          p: 2,
          backgroundColor: Colours.SnippetBackground,
          borderRadius: '16px',
          border: `1px solid ${Colours.SnippetBackground}`,
          overflowX: 'auto',
          maxWidth: '100%',
        }}
      >
        <Typography component="pre" variant="code" sx={{ lineHeight: 1.8, m: 0 }}>
          <span style={{ color: Colours.Blue }}>interface </span>
          <span style={{ color: Colours.LightGreen }}>HootReading </span>
          <span style={{ color: Colours.Pink }}>{'{'}</span>
          {'\n'}
          {'  '}
          <span style={{ color: Colours.LightBlue }}>url</span>
          <span style={{ color: Colours.Punctuation }}>: </span>
          <Link
            href={LinkHrefs.HootReading}
            underline="hover"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ '&:hover': { color: Colours.Orange }, textDecorationColor: Colours.Orange }}
          >
            <span style={{ color: Colours.Orange }}>&apos;{LinkHrefs.HootReading}&apos;</span>
          </Link>
          <span style={{ color: Colours.Punctuation }}>;</span>
          <span style={{ color: Colours.CommentGreen }}>{` // <- clickable! `}</span>
          {'\n'}
          {'  '}
          <span style={{ color: Colours.LightBlue }}>role</span>
          <span style={{ color: Colours.Punctuation }}>: </span>
          <span style={{ color: Colours.Orange }}>&apos;Software Engineer&apos;</span>
          <span style={{ color: Colours.Punctuation }}>;</span>
          {'\n'}
          {'  '}
          <span style={{ color: Colours.LightBlue }}>period</span>
          <span style={{ color: Colours.Punctuation }}>: </span>
          <span style={{ color: Colours.Orange }}>&apos;May 2023 – May 2025&apos;</span>
          <span style={{ color: Colours.Punctuation }}>;</span>
          {'\n'}
          {'  '}
          <span style={{ color: Colours.LightBlue }}>industry</span>
          <span style={{ color: Colours.Punctuation }}>: </span>
          <span style={{ color: Colours.Orange }}>&apos;education-tech&apos;</span>
          <span style={{ color: Colours.Punctuation }}>;</span>
          {'\n'}
          {'  '}
          <span style={{ color: Colours.LightBlue }}>business</span>
          <span style={{ color: Colours.Punctuation }}>: </span>
          <span style={{ color: Colours.Orange }}>&apos;literacy/tutoring&apos;</span>
          <span style={{ color: Colours.Punctuation }}>;</span>
          {'\n'}
          <span style={{ color: Colours.Pink }}>{'}'}</span>
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, my: 3 }}>
        <TechStackPill icon={TypeScriptIcon} name="TypeScript" />
        <TechStackPill icon={ReactIcon} name="React" />
        <TechStackPill icon={MaterialUiIcon} name="MUI" />
        <TechStackPill icon={TailwindIcon} name="Tailwind" />
        <TechStackPill icon={NestJsIcon} name="NestJS" />
        <TechStackPill icon={PostgresIcon} name="PostgreSQL" />
        <TechStackPill icon={AwsIcon} name="AWS" />
      </Box>

      <Grid container spacing={3} alignItems="flex-start">
        {/* Left - Description */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack gap={3}>
            <Typography>
              Hoot Reading is an ed-tech platform connecting K-12 students with certified teachers
              for live, one-on-one structured literacy instruction. The platform scaled to over
              12,000 students and 120,000 annual lessons during my time there, with independent
              Stanford research confirming students achieve three times the reading growth of their
              peers. I worked across the full lesson experience, from the real-time classroom tools
              teachers and students interact with during sessions to the assessment and reporting
              systems that track progress.
            </Typography>
            <Typography>
              The most technically interesting work was building the real-time collaborative
              features that power live lessons. Using Socket.io and tldraw, I built synchronized
              whiteboard annotations and a dual-cursor "magic finger" tool that lets teachers and
              students independently point to text on screen during a session. I also handled the
              migration of live lesson streaming from Twilio to Daily.co, working through
              cross-browser permission edge cases to support scaling from 15 to 200+ concurrent
              lessons.
            </Typography>
          </Stack>
        </Grid>

        {/* Right - Image */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack gap={2}>
            <ImageFrame src="library-reader.png" alt="HootReading library and reader view" />
          </Stack>
        </Grid>
      </Grid>
    </section>
  );
};

export default HootReadingSection;
