import Stack from '@mui/material/Stack';
import { useEffect } from 'react';

const Experience = () => {
  useEffect(() => {
    document.title = "Experience | Shane's Dev Portfolio";
  }, []);

  // TODO: Shane
  // - A Handful of features i'm proud of creating. Visuals to go along with it if able.

  return (
    <Stack px={3}>
      <article>
        <section>
          <h1>Experience</h1>
          <p>LoremIpsum</p>
        </section>
      </article>
    </Stack>
  );
};

export default Experience;
