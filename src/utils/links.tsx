import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';

export const emailAddress = 'shane@sfondeur.dev';

export enum LinkHrefs {
  LinkedIn = 'https://www.linkedin.com/in/shane-fondeur/',
  GitHub = 'https://github.com/sfondeur-88',
  Eq3 = 'https://www.eq3.com',
  HootReading = 'https://www.hootreading.com',
  Gryd = 'https://gryd.com',
  GrydPark = 'https://parkwithgryd.com',
  Rrc = 'https://www.rrc.ca/',
}

export const socialLinks = [
  { icon: <LinkedIn />, href: LinkHrefs.LinkedIn, label: 'View LinkedIn Profile', external: true },
  { icon: <GitHub />, href: LinkHrefs.GitHub, label: 'View GitHub Profile', external: true },
];

export const grydSectionLinks = [
  { label: 'Gryd Digital', url: LinkHrefs.Gryd },
  { label: 'Gryd Park', url: LinkHrefs.GrydPark },
];
