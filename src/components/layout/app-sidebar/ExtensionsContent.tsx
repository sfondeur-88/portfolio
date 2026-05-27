import { D20Icon } from '@/components/ui/icons/D20Icon';
import { ZapIcon } from '@/components/ui/icons/ZapIcon';
import { BuildRounded, MenuBookRounded, SportsEsportsRounded } from '@mui/icons-material';
import { Box, Chip, Divider, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';

type Category = 'project' | 'tools' | 'reading' | 'gaming' | 'tabletop';

interface Extension {
  icon: ReactNode;
  title: string;
  description: string;
  category: Category;
}

const CATEGORY_COLOURS: Record<Category, string> = {
  project: '#31AA8D',
  tools: '#C678DD',
  reading: '#CC837C',
  gaming: '#79C8E2',
  tabletop: '#e5c44e',
};

const extensions: Extension[] = [
  {
    icon: <ZapIcon sx={{ fontSize: 32 }} />,
    title: 'Side Project',
    description: 'Competitive pokemon team builder and battle app',
    category: 'project',
  },
  {
    icon: <BuildRounded sx={{ fontSize: 32 }} />,
    title: "Tools I'm Learning",
    description: 'Tailwind v4, Biome, Drizzle ORM',
    category: 'tools',
  },
  {
    icon: <MenuBookRounded sx={{ fontSize: 32 }} />,
    title: 'The Phoenix Project',
    description: 'Currently reading',
    category: 'reading',
  },
  {
    icon: <MenuBookRounded sx={{ fontSize: 32 }} />,
    title: 'Beyond the Aquila Rift',
    description: 'Currently reading',
    category: 'reading',
  },
  {
    icon: <SportsEsportsRounded sx={{ fontSize: 32 }} />,
    title: "Baldur's Gate 3",
    description: 'Currently playing',
    category: 'gaming',
  },
  {
    icon: <SportsEsportsRounded sx={{ fontSize: 32 }} />,
    title: 'Dragon Quest I&II HD-2D',
    description: 'Currently playing',
    category: 'gaming',
  },
  {
    icon: <D20Icon sx={{ fontSize: 32 }} />,
    title: 'Dungeon Master',
    description: 'Will be running a D&D campaign for the first time as a DM',
    category: 'tabletop',
  },
];

const ExtensionRow = ({ icon, title, description, category }: Extension) => {
  const colour = CATEGORY_COLOURS[category];
  return (
    <Box sx={{ px: 2, py: 1.5, '&:hover': { backgroundColor: 'action.hover' }, cursor: 'default' }}>
      <Stack direction="row" gap={1.5} alignItems="flex-start">
        <Box
          sx={{
            width: 40,
            height: 40,
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: colour,
          }}
        >
          {icon}
        </Box>

        <Stack flex={1} minWidth={0} gap={0.5}>
          <Typography variant="bodySmall" fontWeight={700}>
            {title}
          </Typography>
          <Stack direction="row" alignItems="center" justifyContent="space-between" gap={1}>
            <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.4 }}>
              {description}
            </Typography>
            <Chip
              label={category}
              size="small"
              sx={{
                flexShrink: 0,
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
          </Stack>
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
