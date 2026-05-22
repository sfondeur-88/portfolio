import { ImageFrame } from '@/components/ui/design/ImageFrame';
import { TechStackPill } from '@/components/ui/design/TechStackPill';
import { ExpoIcon } from '@/components/ui/icons/ExpoIcon';
import { GoogleCloudIcon } from '@/components/ui/icons/GoogleCloudIcon';
import { NestJsIcon } from '@/components/ui/icons/NestJsIcon';
import { NextJsIcon } from '@/components/ui/icons/NextJsIcon';
import { PostgresIcon } from '@/components/ui/icons/PostgresIcon';
import { ReactIcon } from '@/components/ui/icons/ReactIcon';
import { TailwindIcon } from '@/components/ui/icons/TailwindIcon';
import { TypeScriptIcon } from '@/components/ui/icons/TypescriptIcon';
import { Colours } from '@/theme';
import { grydSectionLinks } from '@/utils/links';
import { Box, Grid, Link } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';

const GrydSection = () => {
  return (
    <section id="gryd">
      <Typography variant="subtitle" color="text" sx={{ fontSize: '24px', mb: 1 }}>
        // Gryd
      </Typography>
      <Box
        sx={{
          p: 2,
          backgroundColor: Colours.SnippetBackground,
          borderRadius: '16px',
          border: `1px solid ${Colours.SnippetBackground}`,
        }}
      >
        <Typography component="pre" variant="code" sx={{ lineHeight: 1.8, m: 0 }}>
          <span style={{ color: Colours.Blue }}>interface </span>
          <span style={{ color: Colours.LightGreen }}>Gryd </span>
          <span style={{ color: Colours.Pink }}>{'{'}</span>
          {'\n'}
          {'  '}
          <span style={{ color: Colours.LightBlue }}>urls</span>
          <span style={{ color: Colours.Punctuation }}>: </span>
          <span style={{ color: Colours.Yellow }}>{'['}</span>
          {'\n'}
          {grydSectionLinks.map((x) => (
            <React.Fragment key={x.url}>
              {'    '}
              <Link
                href={x.url}
                underline="hover"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ '&:hover': { color: Colours.Orange }, textDecorationColor: Colours.Orange }}
              >
                <span style={{ color: Colours.Orange }}>&apos;{x.url}&apos;</span>
              </Link>
              <span style={{ color: Colours.Punctuation }}>,</span>
              <span style={{ color: Colours.CommentGreen }}>{` // <- clickable! `}</span>
              {'\n'}
            </React.Fragment>
          ))}
          {'  '}
          <span style={{ color: Colours.Yellow }}>{']'}</span>
          <span style={{ color: Colours.Punctuation }}>;</span>

          {'\n'}
          {'  '}
          <span style={{ color: Colours.LightBlue }}>role</span>
          <span style={{ color: Colours.Punctuation }}>: </span>
          <span style={{ color: Colours.Orange }}>&apos;Senior Software Engineer&apos;</span>
          <span style={{ color: Colours.Punctuation }}>;</span>
          {'\n'}
          {'  '}
          <span style={{ color: Colours.LightBlue }}>period</span>
          <span style={{ color: Colours.Punctuation }}>: </span>
          <span style={{ color: Colours.Orange }}>&apos;May 2025 – Present&apos;</span>
          <span style={{ color: Colours.Punctuation }}>;</span>
          {'\n'}
          {'  '}
          <span style={{ color: Colours.LightBlue }}>industry</span>
          <span style={{ color: Colours.Punctuation }}>: </span>
          <span style={{ color: Colours.Orange }}>&apos;property-tech&apos;</span>
          <span style={{ color: Colours.Punctuation }}>;</span>
          {'\n'}
          {'  '}
          <span style={{ color: Colours.LightBlue }}>business</span>
          <span style={{ color: Colours.Punctuation }}>: </span>
          <span style={{ color: Colours.Orange }}>&apos;parking/property&apos;</span>
          <span style={{ color: Colours.Punctuation }}>;</span>
          {'\n'}
          <span style={{ color: Colours.Pink }}>{'}'}</span>
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, my: 3 }}>
        <TechStackPill icon={TypeScriptIcon} name="TypeScript" />
        <TechStackPill icon={ReactIcon} name="React" />
        <TechStackPill icon={NextJsIcon} name="Next.js" />
        <TechStackPill icon={ReactIcon} name="React Native" />
        <TechStackPill icon={ExpoIcon} name="Expo" />
        <TechStackPill icon={TailwindIcon} name="Tailwind" />
        <TechStackPill icon={NestJsIcon} name="NestJS" />
        <TechStackPill icon={PostgresIcon} name="PostgreSQL" />
        <TechStackPill icon={GoogleCloudIcon} name="Google Cloud" />
      </Box>

      <Grid container spacing={3}>
        {/* Left - Description */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack gap={3}>
            <Typography>
              Gryd is a property technology company serving real estate teams across North America
              with digital marketing tools, 3D renderings, and virtual tours. GrydPark, their
              consumer-facing product, is a parking marketplace used by 60,000+ active users to
              find, pre-book, and pay for hourly, daily, and monthly parking. I joined as their sole
              senior frontend engineer and was responsible for both the GrydPark mobile app and
              other internal web tooling.
            </Typography>
            <Typography>
              My biggest initiative was re-architecting the GrydPark mobile app from bare React
              Native to Expo, auditing and migrating 100+ dependencies, replacing native modules
              with Expo alternatives, and moving from manual native builds to EAS with
              multi-environment CI/CD. I also designed and built a guest checkout flow with Stripe
              integration, React Hook Form state management, and OTP verification, creating a
              frictionless multi-step booking experience for first-time parkers.
            </Typography>
            <Typography>
              Beyond feature work, I owned the frontend architecture decisions across both
              codebases, establishing component libraries with shadcn and Radix UI on the web side,
              creating custom component libraries on the Mobile side, standardizing state management
              patterns with Zustand, and identifying performance bottlenecks through effect
              dependency audits and render optimization.
            </Typography>
          </Stack>
        </Grid>

        {/* Right - Image */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Stack gap={2}>
            <ImageFrame src="map-screen.png" alt="Gryd Mobile-app map view" maxHeight={600} />
          </Stack>
        </Grid>
      </Grid>
    </section>
  );
};

export default GrydSection;
