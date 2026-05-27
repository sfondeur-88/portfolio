import { Colours } from '@/theme';
import { LinkHrefs } from '@/utils/links';
import { Box, Divider, Link, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';

const SectionDivider = () => (
  <Divider sx={{ display: { xs: 'block', sm: 'none' }, borderColor: 'divider', mx: '48px' }} />
);

const AboutMe = () => {
  useEffect(() => {
    document.title = "About Me | Shane's Dev Portfolio";
  }, []);

  return (
    <Stack component="article" gap={8} p={{ xs: '12px', sm: 4 }} sx={{ wordBreak: 'break-word' }}>
      <section id="intro">
        <Typography variant="subtitle" color="text" sx={{ fontSize: '24px', mb: 1 }}>
          // Intro
        </Typography>
        <Box
          sx={{
            padding: 1,
            mb: 3,
            backgroundColor: Colours.SnippetBackground,
            border: `1px solid ${Colours.SnippetBackground}`,
            borderRadius: '16px',
            overflowX: 'auto',
            maxWidth: '100%',
          }}
        >
          <Typography
            component="pre"
            variant="code"
            color="primary.main"
            sx={{
              display: 'block',
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            <span>{'/**'}</span>
            {'\n'}
            <span>{' * '}</span>
            <span style={{ color: '#C678DD' }}>{'@name'}</span>
            {'     Shane Fondeur\n'}
            <span>{' * '}</span>
            <span style={{ color: '#C678DD' }}>{'@role'}</span>
            {'     Senior Frontend Engineer\n'}
            <span>{' * '}</span>
            <span style={{ color: '#C678DD' }}>{'@location'}</span>
            {' Winnipeg, MB, Canada\n'}
            <span>{' * '}</span>
            <span style={{ color: '#C678DD' }}>{'@years'}</span>
            {'    8\n'}
            <span>{' * '}</span>
            <span style={{ color: '#C678DD' }}>{'@focus'}</span>
            {'    Software development - web & mobile\n'}
            <span>{' */'}</span>
          </Typography>
        </Box>
        <Typography>
          I'm Shane, a Senior Frontend Engineer based in Winnipeg with 8 years of experience
          building web and mobile products. I specialize in React ecosystems (Next.JS, React
          Native), from internal company tools to customer facing e-commerce web apps to React
          Native mobile applications. I have a strong focus on clean architecture, strong TypeScript
          practices, and building things that are properly maintainable by a team. I care about
          getting the details right without over-engineering the solution.
        </Typography>

        <Typography mt={4}>
          Over 8 years I've shipped across e-commerce, education-tech, and property-tech, each with
          different constraints, different scales, and different problems to solve. My work actually
          spans the full stack, though the front-end is where I'm most at home. More recently I've
          leaned into AI-assisted development, using tools like Claude Code or Gemini for ideas,
          planning, and research, Cursor and Copilot for IDE velocity, and CodeRabbit for additional
          eyes on Pull Requests and Code review.
        </Typography>
      </section>

      <SectionDivider />

      <section id="origin-story">
        <Typography variant="subtitle" color="text" sx={{ fontSize: '24px', mb: 1 }}>
          // Origin Story
        </Typography>
        <Typography>
          My first glimpse of a career in tech came from an unlikely place - a worn VHS documentary
          about Rare (aka Rareware), the studio behind Goldeneye 007, Banjo-Kazooie, and Donkey Kong
          Country, and many other great games. The offices were covered in gaming posters and
          consoles, I remember thinking: you can actually do this for a living?? It didn't look like
          any job I'd ever seen, and it stuck with me. For the first time I started wondering how
          software & video games actually get built and that curiousity would stick with me for
          years to come.
        </Typography>
        <Typography mt={4}>
          Years later in high school, an application development course gave me my first real taste
          of programming. That led to building my own HTML sites at home, mostly about video games,
          guides and walkthroughs, anything I was into at the time. Then I discovered CSS and fell
          down a rabbit hole I never really climbed out of. There was something about taking a blank
          page and turning it into something that looked real that i couldn't get enough of.
        </Typography>
      </section>

      <SectionDivider />

      <section id="education">
        <Typography variant="subtitle" color="text" sx={{ fontSize: '24px', mb: 1 }}>
          // Education
        </Typography>

        <Box
          sx={{
            padding: 1,
            mb: 3,
            backgroundColor: Colours.SnippetBackground,
            border: `1px solid ${Colours.SnippetBackground}`,
            borderRadius: '16px',
            overflowX: 'auto',
            maxWidth: '100%',
          }}
        >
          <Typography
            component="pre"
            variant="code"
            color="primary.main"
            sx={{ display: 'block', p: 1, lineHeight: 1.8, margin: 0 }}
          >
            <ColorSpan c="#C678DD">const </ColorSpan>
            <ColorSpan c={Colours.Blue}>education</ColorSpan>
            <WhitePunctuation>: </WhitePunctuation>
            <ColorSpan c={Colours.LightGreen}>School</ColorSpan>
            <WhitePunctuation> = </WhitePunctuation>
            <ColorSpan c={Colours.Pink}>{'{'}</ColorSpan>
            {'\n'}

            {'  '}
            <ColorSpan c={Colours.LightBlue}>name</ColorSpan>
            <WhitePunctuation>: </WhitePunctuation>
            <ColorSpan c={Colours.Orange}>&apos;Red River College Polytechnic&apos;</ColorSpan>
            <WhitePunctuation>,</WhitePunctuation>
            {'\n'}

            {'  '}
            <ColorSpan c={Colours.LightBlue}>location</ColorSpan>
            <WhitePunctuation>: </WhitePunctuation>
            <ColorSpan c={Colours.Orange}>&apos;Winnipeg, MB, Canada&apos;</ColorSpan>
            <WhitePunctuation>,</WhitePunctuation>
            {'\n'}

            {'  '}
            <ColorSpan c={Colours.LightBlue}>url</ColorSpan>
            <WhitePunctuation>: </WhitePunctuation>
            <Link
              href={LinkHrefs.Rrc}
              underline="hover"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ '&:hover': { color: Colours.Orange }, textDecorationColor: Colours.Orange }}
            >
              <ColorSpan c={Colours.Orange}>&apos;rrc.ca&apos;</ColorSpan>
            </Link>
            <WhitePunctuation>, </WhitePunctuation>
            <span style={{ color: Colours.CommentGreen }}>{`// <- clickable! `}</span>
            {'\n'}

            {'  '}
            <ColorSpan c={Colours.LightBlue}>program</ColorSpan>
            <WhitePunctuation>: </WhitePunctuation>
            <ColorSpan c={Colours.Pink}>{'{'}</ColorSpan>
            {'\n'}

            {'    '}
            <ColorSpan c={Colours.LightBlue}>name</ColorSpan>
            <WhitePunctuation>: </WhitePunctuation>
            <ColorSpan c={Colours.Orange}>&apos;Business Information Technology&apos;</ColorSpan>
            <WhitePunctuation>,</WhitePunctuation>
            {'\n'}

            {'    '}
            <ColorSpan c={Colours.LightBlue}>credential</ColorSpan>
            <WhitePunctuation>: </WhitePunctuation>
            <ColorSpan c={Colours.Orange}>&apos;Diploma&apos;</ColorSpan>
            <WhitePunctuation>,</WhitePunctuation>
            {'\n'}

            {'    '}
            <ColorSpan c={Colours.LightBlue}>years</ColorSpan>
            <WhitePunctuation>: </WhitePunctuation>
            <ColorSpan c={Colours.Orange}>&apos;2016 – 2018&apos;</ColorSpan>
            <WhitePunctuation>,</WhitePunctuation>
            {'\n'}

            {'    '}
            <ColorSpan c={Colours.LightBlue}>highlights</ColorSpan>
            <WhitePunctuation>: </WhitePunctuation>
            <ColorSpan c={Colours.Yellow}>{'['}</ColorSpan>
            {'\n'}

            {[
              'Application Development',
              'Web Development',
              'System Design',
              'Database Management',
              'Network Administration',
            ].map((item) => (
              <React.Fragment key={item}>
                {'      '}
                <ColorSpan c={Colours.Orange}>&apos;{item}&apos;</ColorSpan>
                <WhitePunctuation>,</WhitePunctuation>
                {'\n'}
              </React.Fragment>
            ))}

            {'    '}
            <ColorSpan c={Colours.Yellow}>{']'}</ColorSpan>
            <WhitePunctuation>,</WhitePunctuation>
            {'\n'}

            {'  '}
            <ColorSpan c={Colours.Pink}>{'}'}</ColorSpan>
            <WhitePunctuation>,</WhitePunctuation>
            {'\n'}

            <ColorSpan c={Colours.Pink}>{'}'}</ColorSpan>
            <WhitePunctuation>;</WhitePunctuation>
            {'\n'}
          </Typography>
        </Box>

        <Typography mt={4}>
          A 28-month program spanning application development, database management, networking, and
          web development. But the moment that defined my direction was my first Web Development
          course. We were handed a full screenshot of the Hayden Planetarium homepage and told to
          rebuild it from scratch in HTML, CSS, and JavaScript. Every gradient, shadow, margin, and
          icon had to be exact. I loved every minute of it. I remember thinking I just wanted to
          spend my career recreating interfaces like this one. What I didn't know was that a little
          tool called Figma was being built that same year, and that years later I'd be spending my
          days doing exactly that - taking designs and turning them into pixel-perfect interfaces.
        </Typography>
        <Typography mt={4}>
          In Term 4, I took the industry project elective, landing a placement with a company called
          Due North Systems. I spent the term working on Tutor+, a real Angular and TypeScript
          application in the education-tech sector. It was my first taste of working on a live
          codebase with actual stakeholders, and it confirmed that this was the career I wanted.
        </Typography>
        <Typography mt={4}>
          My final term project was an app i cleverly titled "ShopForStuff", a full-stack Ruby on Rails
          marketplace I built from scratch. It had authentication, category browsing, image uploads,
          an admin portal system, and Stripe integration for purchases. I used the Materialize CSS
          framework which at the time felt very cutting edge. It placed 2nd highest in the class and
          earned 101%, which I was quite proud of.
        </Typography>
      </section>
    </Stack>
  );
};

const ColorSpan = ({ c, children }: { c: string; children: React.ReactNode }) => (
  <span style={{ color: c }}>{children}</span>
);
const WhitePunctuation = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: Colours.Punctuation }}>{children}</span>
);

export default AboutMe;
