import { Stack, Typography } from '@mui/material';
import { useEffect } from 'react';

const AboutMe = () => {
  useEffect(() => {
    document.title = "About Me | Shane's Dev Portfolio";
  }, []);

  return (
    <Stack px={3}>
      <article>
        <section id="intro">
          <Typography variant="h1">Bio/Intro</Typography>
          <Typography>Lorem ipsum</Typography>
        </section>

        <section id="origin-story">
          <Typography variant="h2">Origin Story</Typography>
          <Typography>Lorem ipsum</Typography>
        </section>

        <section id="stack">
          <Typography variant="h2">Stack</Typography>
          <Typography>Lorem ipsum</Typography>
        </section>

        <section id="education">
          <Typography variant="h2">Education</Typography>
          <Typography>Lorem ipsum</Typography>
        </section>
      </article>
    </Stack>
  );
};

export default AboutMe;
