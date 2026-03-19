import { ROUTE_PATHS } from '@/routes/paths';

type ExplorerType = 'file' | 'folder';

interface ExplorerSection {
  id: string;
  label: string;
}

export interface ExplorerFile {
  type: Extract<ExplorerType, 'file'>;
  label: string;
  path: string;
  sections?: ExplorerSection[];
}

export interface ExplorerFolder {
  type: Extract<ExplorerType, 'folder'>;
  label: string;
  children: (ExplorerFolder | ExplorerFile)[];
}

interface ExplorerTree {
  rootLabel: string;
  folders: ExplorerFolder[];
}

export const explorerTree: ExplorerTree = {
  rootLabel: 'shane_fondeur',
  folders: [
    {
      type: 'folder',
      label: 'pages',
      children: [
        {
          type: 'folder',
          label: 'welcome',
          children: [{ type: 'file', label: 'Welcome.tsx', path: ROUTE_PATHS.WELCOME }],
        },
        {
          type: 'folder',
          label: 'about-me',
          children: [
            {
              type: 'file',
              label: 'AboutMe.tsx',
              path: ROUTE_PATHS.ABOUT_ME,
              sections: [
                { id: 'intro', label: 'intro' },
                { id: 'origin-story', label: 'origin-story' },
                { id: 'stack', label: 'stack' },
                { id: 'education', label: 'education' },
              ],
            },
          ],
        },
        {
          type: 'folder',
          label: 'experience',
          children: [
            {
              type: 'file',
              label: 'Experience.tsx',
              path: ROUTE_PATHS.EXPERIENCE,
              sections: [
                { id: 'gryd', label: 'gryd' },
                { id: 'hoot', label: 'hoot' },
                { id: 'eq3', label: 'eq3' },
              ],
            },
          ],
        },
      ],
    },
  ],
};
