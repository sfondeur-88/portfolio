import Stack from '@mui/material/Stack';
import { useEffect } from 'react';
import EQ3Section from './EQ3Section';
import GrydSection from './GrydSection';
import HootReadingSection from './HootReadingSection';

const Experience = () => {
  useEffect(() => {
    document.title = "Experience | Shane's Dev Portfolio";
  }, []);

  return (
    <Stack component="article" gap={8} p={4}>
      <GrydSection />
      <HootReadingSection />
      <EQ3Section />
    </Stack>
  );
};

export default Experience;
