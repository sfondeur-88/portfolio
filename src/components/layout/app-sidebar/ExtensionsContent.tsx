import { D20Icon } from '@/components/ui/icons/D20Icon';
import { ZapIcon } from '@/components/ui/icons/ZapIcon';
import { BuildRounded, MenuBookRounded, SportsEsportsRounded } from '@mui/icons-material';
import { Box, Chip, Divider, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';

type Category = 'projects' | 'tools' | 'reading' | 'gaming' | 'tabletop';

interface Extension {
  icon: ReactNode;
  title: string;
  description: string;
  category: Category;
}

const CATEGORY_COLOURS: Record<Category, string> = {
  projects: '#31AA8D',
  tools: '#C678DD',
  reading: '#CC837C',
  gaming: '#79C8E2',
  tabletop: '#b62626',
};

const extensions: Extension[] = [
  {
    icon: <ZapIcon sx={{ fontSize: 24 }} />,
    title: 'Side Projects',
    description:
      'Competitive pokemon team builder and battle tool, A local Marketplace app, and a Social media related app.',
    category: 'projects',
  },
  {
    icon: <BuildRounded sx={{ fontSize: 24 }} />,
    title: `New Tools I'm Learning`,
    description: 'Tailwind v4, Drizzle ORM, Supabase, Claude Code (advanced), Biome.',
    category: 'tools',
  },
  {
    icon: <MenuBookRounded sx={{ fontSize: 24 }} />,
    title: `Books I'm Reading`,
    description: 'The Phoenix Project, Beyond the Aquila Rift, Neuromancer.',
    category: 'reading',
  },
  {
    icon: <SportsEsportsRounded sx={{ fontSize: 24 }} />,
    title: "Games I'm Playing",
    description: `Baldur's Gate 3, Dragon Quest I&II HD-2D Remake, Expedition 33.`,
    category: 'gaming',
  },
  {
    icon: <D20Icon sx={{ fontSize: 24 }} />,
    title: 'Dungeons & Dragons',
    description: `I'll soon be running a D&D campaign for the first time as a DM. It sounded like a fun challenge and could help build soft-skills.`,
    category: 'tabletop',
  },
];

const ExtensionRow = ({ icon, title, description, category }: Extension) => {
  const colour = CATEGORY_COLOURS[category];
  return (
    <Box sx={{ px: 2, py: 1, '&:hover': { backgroundColor: 'action.hover' }, cursor: 'default' }}>
      <Stack direction="row" gap={1} alignItems="flex-start">
        <Box
          sx={{
            width: 24,
            height: 24,
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: colour,
          }}
        >
          {icon}
        </Box>

        <Stack flex={1} minWidth={0}>
          <Typography variant="bodySmall" fontWeight={700}>
            {title}
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.4 }}>
            {description}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 0.5 }}>
            <Chip
              label={category}
              size="small"
              sx={{
                height: 20,
                fontSize: '10px',
                fontFamily: 'inherit',
                fontWeight: 600,
                color: colour,
                backgroundColor: `${colour}22`,
                border: `1px solid ${colour}55`,
                borderRadius: '4px',
                '& .MuiChip-label': { px: '6px' },
              }}
            />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

const ExtensionsContent = () => {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Typography
        variant="label"
        sx={{ p: 2, display: 'block', letterSpacing: '0.08em', color: 'text.secondary' }}
      >
        EXTENSIONS: ACTIVE
      </Typography>

      {extensions.map((ext, i) => (
        <Box key={ext.title}>
          <ExtensionRow {...ext} />
          {i < extensions.length - 1 && <Divider sx={{ borderColor: 'divider', opacity: 0.4 }} />}
        </Box>
      ))}
    </Box>
  );
};

export default ExtensionsContent;
