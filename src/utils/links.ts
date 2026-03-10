import { GitHub, LinkedIn } from '@mui/icons-material';

export const emailAddress = 'shane@sfondeur.dev';

export enum LinkHrefs {
  LinkedIn = 'https://www.linkedin.com/in/shane-fondeur/',
  GitHub = 'https://github.com/sfondeur-88',
  Eq3 = 'https://www.eq3.com/',
  HootReading = 'https://www.hootreading.com',
  Gryd = 'https://gryd.com',
}

export const socialLinks = [
  { Icon: LinkedIn, href: LinkHrefs.LinkedIn, external: true },
  { Icon: GitHub, href: LinkHrefs.GitHub, external: true },
];
