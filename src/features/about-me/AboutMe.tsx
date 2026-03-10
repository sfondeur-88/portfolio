import { Stack } from '@mui/material';
import { useEffect } from 'react';

const AboutMe = () => {
  useEffect(() => {
    document.title = "About Me | Shane's Dev Portfolio";
  }, []);

  // TODO:Shane
  //
  // ▼ about-me
  //   ▼ personal
  //       bio.md
  //       interests.md
  //   ▼ background
  //       origin-story.md
  //       education.md

  return (
    <Stack>
      <article>
        {/* Bio/Intro */}
        <section>
          <h1>Bio/Intro</h1>
          <p>LoremIpsum</p>
        </section>
      </article>
    </Stack>
  );
};

export default AboutMe;
