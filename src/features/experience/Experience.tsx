import { Divider } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useEffect } from 'react';
import EQ3Section from './EQ3Section';
import GrydSection from './GrydSection';
import HootReadingSection from './HootReadingSection';

const SectionDivider = () => (
  <Divider sx={{ display: { xs: 'block', sm: 'none' }, borderColor: 'divider', mx: '48px' }} />
);

const Experience = () => {
  useEffect(() => {
    document.title = "Experience | Shane's Dev Portfolio";
  }, []);

  return (
    <Stack component="article" gap={8} p={{ xs: '12px', sm: 4 }} sx={{ wordBreak: 'break-word' }}>
      <GrydSection />
      <SectionDivider />
      <HootReadingSection />
      <SectionDivider />
      <EQ3Section />
    </Stack>
  );
};

export default Experience;
