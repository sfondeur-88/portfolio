import { ImageFrame } from '@/components/ui/design/ImageFrame';
import { TechStackPill } from '@/components/ui/design/TechStackPill';
import { AwsIcon } from '@/components/ui/icons/AwsIcon';
import { KotlinIcon } from '@/components/ui/icons/KotlinIcon';
import { MaterialUiIcon } from '@/components/ui/icons/MaterialUiIcon';
import { NextJsIcon } from '@/components/ui/icons/NextJsIcon';
import { ReactIcon } from '@/components/ui/icons/ReactIcon';
import { SpringBootIcon } from '@/components/ui/icons/SpringBootIcon';
import { TypeScriptIcon } from '@/components/ui/icons/TypeScriptIcon';
import { Colours } from '@/theme';
import { LinkHrefs } from '@/utils/links';
import { Box, Grid, Link } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const EQ3Section = () => {
  return (
    <section id="eq3">
      <Typography variant="subtitle" color="text" sx={{ fontSize: '24px', mb: 1 }}>
        // EQ3
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
          <span style={{ color: Colours.LightGreen }}>EQ3 </span>
          <span style={{ color: Colours.Pink }}>{'{'}</span>
          {'\n'}
          {'  '}
          <span style={{ color: Colours.LightBlue }}>industry</span>
          <span style={{ color: Colours.Punctuation }}>: </span>
          <span style={{ color: Colours.Orange }}>&apos;e-commerce&apos;</span>
          <span style={{ color: Colours.Punctuation }}>;</span>
          {'\n'}
          {'  '}
          <span style={{ color: Colours.LightBlue }}>url</span>
          <span style={{ color: Colours.Punctuation }}>: </span>
          <Link
            href={LinkHrefs.Eq3}
            underline="hover"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ '&:hover': { color: Colours.Orange }, textDecorationColor: Colours.Orange }}
          >
            <span style={{ color: Colours.Orange }}>&apos;{LinkHrefs.Eq3}&apos;</span>
          </Link>
          <span style={{ color: Colours.Punctuation }}>;</span>
          <span style={{ color: Colours.CommentGreen }}>{` // <- clickable! `}</span>
          {'\n'}
          {'  '}
          <span style={{ color: Colours.LightBlue }}>product</span>
          <span style={{ color: Colours.Punctuation }}>: </span>
          <span style={{ color: Colours.Yellow }}>{'['}</span>
          {'\n'}
          {'    '}
          <span style={{ color: Colours.Orange }}>&apos;furniture&apos;</span>
          <span style={{ color: Colours.Punctuation }}>,</span>
          {'\n'}
          {'    '}
          <span style={{ color: Colours.Orange }}>&apos;retail&apos;</span>
          <span style={{ color: Colours.Punctuation }}>,</span>
          {'\n'}
          {'    '}
          <span style={{ color: Colours.Orange }}>&apos;custom made&apos;</span>
          <span style={{ color: Colours.Punctuation }}>,</span>
          {'\n'}
          {'    '}
          <span style={{ color: Colours.Orange }}>&apos;b2c&apos;</span>
          <span style={{ color: Colours.Punctuation }}>,</span>
          {'\n'}
          {'  '}
          <span style={{ color: Colours.Yellow }}>{']'}</span>
          <span style={{ color: Colours.Punctuation }}>;</span>
          {'\n'}
          {'  '}
          <span style={{ color: Colours.LightBlue }}>teamSize</span>
          <span style={{ color: Colours.Punctuation }}>: </span>
          <span style={{ color: Colours.Orange }}>&apos;medium (~20 members)&apos;</span>
          <span style={{ color: Colours.Punctuation }}>;</span>
          {'\n'}
          {'  '}
          <span style={{ color: Colours.LightBlue }}>roles</span>
          <span style={{ color: Colours.Punctuation }}>: </span>
          <span style={{ color: Colours.Yellow }}>{'['}</span>
          {'\n'}
          {'    '}
          <span style={{ color: Colours.Orange }}>&apos;Intern&apos;</span>
          <span style={{ color: Colours.Punctuation }}>,</span>
          {'\n'}
          {'    '}
          <span style={{ color: Colours.Orange }}>&apos;Junior Developer&apos;</span>
          <span style={{ color: Colours.Punctuation }}>,</span>
          {'\n'}
          {'    '}
          <span style={{ color: Colours.Orange }}>&apos;Intermediate Developer&apos;</span>
          <span style={{ color: Colours.Punctuation }}>,</span>
          {'\n'}
          {'  '}
          <span style={{ color: Colours.Yellow }}>{']'}</span>
          <span style={{ color: Colours.Punctuation }}>;</span>
          {'\n'}
          {'  '}
          <span style={{ color: Colours.LightBlue }}>period</span>
          <span style={{ color: Colours.Punctuation }}>: </span>
          <span style={{ color: Colours.Orange }}>&apos;May 2019 – May 2023&apos;</span>
          <span style={{ color: Colours.Punctuation }}>;</span>
          {'\n'}
          {'  '}
          <span style={{ color: Colours.LightBlue }}>type</span>
          <span style={{ color: Colours.Punctuation }}>: </span>
          <span style={{ color: Colours.Orange }}>&apos;full-time, remote&apos;</span>
          <span style={{ color: Colours.Punctuation }}>;</span>
          {'\n'}
          <span style={{ color: Colours.Pink }}>{'}'}</span>
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, my: 3 }}>
        <TechStackPill icon={TypeScriptIcon} name="TypeScript" />
        <TechStackPill icon={KotlinIcon} name="Kotlin" />
        <TechStackPill icon={ReactIcon} name="React" />
        <TechStackPill icon={NextJsIcon} name="Next.js" />
        <TechStackPill icon={SpringBootIcon} name="Spring Boot" />
        <TechStackPill icon={MaterialUiIcon} name="MUI" />
        <TechStackPill icon={AwsIcon} name="AWS" />
      </Box>

      <Grid container spacing={3} alignItems="flex-start">
        {/* Left - Description */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack gap={3}>
            <Typography>
              EQ3 is a Canadian furniture designer, manufacturer, and retailer known for their
              modern aesthetic and made-to-order customization. I joined as part of the team that
              rebuilt their entire e-commerce platform in Next.js, pushing Lighthouse performance
              scores from the low 30s to 90-100 and contributing to a 300% increase in online
              revenue. My work spanned the full shopping experience, from product discovery and
              configuration to cart, checkout, and post-purchase analytics.
            </Typography>
            <Typography>
              The product detail page was the centerpiece. I built a multi-step configurator
              supporting millions of customization combinations across upholstery grades, cover
              types, arm heights, and leg finishes, complete with high-resolution swatch detail
              modals sourcing photography from an in-house material capture pipeline. I also built
              an AR product viewer that passed live configurator state through a QR code to a
              Cylindo-powered mobile AR experience, driving a 429% increase in AR adoption and a
              112% higher conversion rate among AR users.
            </Typography>
          </Stack>
        </Grid>

        {/* Right - Image */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack gap={2}>
            <ImageFrame src="pdp.png" alt="Product Page EQ3" />
          </Stack>
        </Grid>
      </Grid>

      <Typography mt={3}>
        Data informed everything. I used LaunchDarkly feature flags to A/B test PDP designs, drawing
        on FullStory heatmap data that revealed the configurator ranked 13th in click engagement —
        insight that drove a full redesign achieving a 36% conversion lift, 88% higher average order
        value, and 116% increase in page views. I also integrated and maintained the full analytics
        stack across Segment, Google Analytics, Klaviyo, Meta Pixel, and FullStory session replays
        to surface rage clicks, funnel drop-offs, and UX regressions across the platform.
      </Typography>
    </section>
  );
};

export default EQ3Section;
