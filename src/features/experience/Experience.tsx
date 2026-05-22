import Stack from '@mui/material/Stack';
import { useEffect } from 'react';
import EQ3Section from './EQ3Section';
import GrydSection from './GrydSection';
import HootReadingSection from './HootReadingSection';

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
    <Stack component="article" gap={8} p={4}>
      <GrydSection />
      <HootReadingSection />
      <EQ3Section />
    </Stack>
  );
};

export default Experience;
