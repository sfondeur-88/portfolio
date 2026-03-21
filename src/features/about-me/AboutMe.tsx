import { Stack, Typography } from '@mui/material';
import { useEffect } from 'react';

// TODO:Shane - Split into own file. And possibly change set up to use id and labels properly in component.
export const ABOUT_ME_SECTIONS = [
  { id: 'intro', label: 'intro' },
  { id: 'origin-story', label: 'origin-story' },
  // { id: 'stack', label: 'stack' },
  { id: 'education', label: 'education' },
];

const AboutMe = () => {
  useEffect(() => {
    document.title = "About Me | Shane's Dev Portfolio";
  }, []);

  return (
    <Stack component="article" gap={4} p={4}>
      <section id="intro">
        <Typography variant="subtitle">Bio/Intro</Typography>
        {/* TODO:Shane - Needs a re-write. */}
        <Typography>
          I'm Shane, a Senior Front-End Engineer based in Winnipeg with 7 years of experience
          building web and mobile products. I specialize in React ecosystems, from consumer-facing
          web apps to React Native mobile — with a focus on clean architecture, strong TypeScript
          practices, and building things that are actually maintainable by a team. I care about
          getting the details right without over-engineering the solution.
        </Typography>
      </section>

      <section id="origin-story">
        <Typography variant="subtitle">Origin Story</Typography>
        <Typography>
          My first glimpse of a career in tech came from an unlikely place - a worn VHS documentary
          about Rare, the studio behind Goldeneye 007, Banjo-Kazooie, and Donkey Kong Country (and
          many others). Watching the people who made those games work together in offices covered in
          posters and consoles, I remember thinking: you can actually do this for a living?? It
          didn't look like any job I'd ever seen, and it stuck with me. Years later in high school,
          an application development course gave me my first real taste of programming. That led to
          building my own HTML sites at home, mostly about video games, guides and walkthroughs,
          anything I was into at the time. Then I discovered CSS and fell down a rabbit hole I never
          really climbed out of.
        </Typography>
      </section>

      <section id="education">
        <Typography variant="subtitle">Education</Typography>
        {/* TODO:Shane - Needs better styled details on the next 2 lines. */}
        <Typography variant="bodyLarge">// Business Information Technology</Typography>
        <Typography variant="bodyLarge">
          // Red River College Polytechnic, Winnipeg (2016 to 2018)
        </Typography>
        <Typography>
          A 28-month program spanning application development, database management, networking, and
          web development. But the moment that defined my direction was my first Web Development
          course. We were handed a full screenshot of the Hayden Planetarium homepage and told to
          rebuild it from scratch in HTML, CSS, and JavaScript. Every gradient, shadow, margin, and
          icon had to be exact. I loved every minute of it. I remember thinking I just wanted to
          spend my career recreating interfaces like this one. What I didn't know was that a little
          tool called Figma was being built that same year, and that years later I'd be spending my
          days doing exactly that - taking designs and turning them into pixel-perfect interfaces.
        </Typography>
        <Typography>
          In Term 4, I took the industry project elective, landing a placement with a company called
          Due North Systems. I spent the term working on Tutor+, a real Angular and TypeScript
          application for ed-tech. It was my first taste of working on a live codebase with actual
          stakeholders, and it confirmed that this was the career I wanted.
        </Typography>
        <Typography>
          My final term project was ShopForStuff, a full-stack Ruby on Rails marketplace I built
          from scratch. It had Authentication, category browsing, image uploads, an admin portal
          system, and Stripe integration for purchases. I used the Materialize CSS framework which
          at the time felt very cutting edge. It placed 2nd highest in the class and earned 101%,
          which I'm still quietly proud of.
        </Typography>
      </section>
    </Stack>
  );
};

export default AboutMe;
