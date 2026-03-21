import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';

// TODO:Shane - Split into own file. And possibly change set up to use id and labels properly in component.
export const EXPERIENCE_SECTIONS = [
  { id: 'gryd', label: 'gryd' },
  { id: 'hoot-reading', label: 'hoot-reading' },
  { id: 'eq3', label: 'eq3' },
];

const Experience = () => {
  useEffect(() => {
    document.title = "Experience | Shane's Dev Portfolio";
  }, []);

  // TODO: Shane
  // A Handful of features i'm proud of creating. Visuals to go along with it if able.
  // EQ3 - Home & PDP page, Nextjs re-write, Analytics stack, Component library, Accessibility certification
  // Hoot - Re-design of V2 site, Students app, Assessments V2, Daily.co integration, Whiteboard w/ Tldraw
  // Gryd - Expo migration, Guest Checkout V2, RN Mobile-App improvements

  return (
    <Stack component="article" gap={4} p={4}>
      <section id="gryd">
        <Typography variant="subtitle">Gryd</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan efficitur
          augue, et ultrices elit consequat in. Suspendisse accumsan dui ac consequat euismod. Duis
          blandit dictum purus vel consectetur. Aenean convallis ultricies pharetra. Proin
          scelerisque urna sed metus volutpat porta. Phasellus vel urna urna. Aenean mattis nunc in
          quam lobortis, eu tempor orci varius. Donec nec massa ante. Nulla turpis metus, dapibus
          eget diam eu, bibendum pulvinar leo. Vivamus ac ante rhoncus, auctor orci non, mollis mi.
          Vestibulum tempus nibh mollis lectus blandit, non scelerisque metus euismod. Mauris vel
          augue lorem. In viverra risus quis luctus vulputate. Vivamus varius fringilla massa sit
          amet tristique. Proin semper vestibulum rhoncus. Duis tincidunt semper convallis.
        </Typography>
      </section>

      <section id="hoot-reading">
        <Typography variant="subtitle">Hoot Reading</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan efficitur
          augue, et ultrices elit consequat in. Suspendisse accumsan dui ac consequat euismod. Duis
          blandit dictum purus vel consectetur. Aenean convallis ultricies pharetra. Proin
          scelerisque urna sed metus volutpat porta. Phasellus vel urna urna. Aenean mattis nunc in
          quam lobortis, eu tempor orci varius. Donec nec massa ante. Nulla turpis metus, dapibus
          eget diam eu, bibendum pulvinar leo. Vivamus ac ante rhoncus, auctor orci non, mollis mi.
          Vestibulum tempus nibh mollis lectus blandit, non scelerisque metus euismod. Mauris vel
          augue lorem. In viverra risus quis luctus vulputate. Vivamus varius fringilla massa sit
          amet tristique. Proin semper vestibulum rhoncus. Duis tincidunt semper convallis.
        </Typography>
      </section>

      <section id="eq3">
        <Typography variant="subtitle">EQ3</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan efficitur
          augue, et ultrices elit consequat in. Suspendisse accumsan dui ac consequat euismod. Duis
          blandit dictum purus vel consectetur. Aenean convallis ultricies pharetra. Proin
          scelerisque urna sed metus volutpat porta. Phasellus vel urna urna. Aenean mattis nunc in
          quam lobortis, eu tempor orci varius. Donec nec massa ante. Nulla turpis metus, dapibus
          eget diam eu, bibendum pulvinar leo. Vivamus ac ante rhoncus, auctor orci non, mollis mi.
          Vestibulum tempus nibh mollis lectus blandit, non scelerisque metus euismod. Mauris vel
          augue lorem. In viverra risus quis luctus vulputate. Vivamus varius fringilla massa sit
          amet tristique. Proin semper vestibulum rhoncus. Duis tincidunt semper convallis.
        </Typography>
      </section>
    </Stack>
  );
};

export default Experience;
