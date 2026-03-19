import ActivityBarTooltip from '@/components/ui/core/ActivitySidebarTooltip';
import { socialLinks } from '@/utils/links';
import { FileCopyRounded, WidgetsRounded } from '@mui/icons-material';
import { Box, Divider, IconButton } from '@mui/material';

const ACTIVITY_BAR_WIDTH = 56;

export type TogglePanelId = 'explorer' | 'extensions';

// TODO:Shane - Icons can be a bit bigger.. maybe 28px -> 32px ?
const toggleItems = [
  { id: 'explorer' as TogglePanelId, icon: <FileCopyRounded />, label: 'Explorer' },
  { id: 'extensions' as TogglePanelId, icon: <WidgetsRounded />, label: 'Hobbies' },
];

type ActivityBarProps = {
  activePanel: TogglePanelId | null;
  onTogglePanel: (id: TogglePanelId) => void;
};

const iconButtonSx = {
  width: ACTIVITY_BAR_WIDTH,
  height: ACTIVITY_BAR_WIDTH,
  borderRadius: 0,
  color: 'text.secondary',
  transition: 'color 0.1s ease, background-color 0.1s ease',
  '&:hover': {
    backgroundColor: 'transparent',
    color: 'text.primary',
  },
};

// TODO:Shane
// Light/Dark toggle button

const ActivityBar = (props: ActivityBarProps) => {
  const { activePanel, onTogglePanel } = props;

  return (
    <Box
      component="nav"
      aria-label="Activity bar"
      sx={{
        width: ACTIVITY_BAR_WIDTH,
        height: '100%',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderColor: 'divider',
        paddingY: 1,
        gap: 0.5,
      }}
    >
      {toggleItems.map(({ id, icon, label }) => (
        <ActivityBarTooltip key={id} label={label}>
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IconButton
              onClick={() => onTogglePanel(id)}
              aria-label={label}
              aria-pressed={activePanel === id}
              disableRipple
              sx={{
                ...iconButtonSx,
                borderLeft: '2px solid',
                borderColor: activePanel === id ? 'primary.main' : 'transparent',
                color: activePanel === id ? 'text.primary' : 'grey',
                // TODO:Shane - make the bg stand out more, or remove. (Its too subtle atm)
                backgroundColor: activePanel === id ? 'action.selected' : 'transparent',
              }}
            >
              {icon}
            </IconButton>
          </Box>
        </ActivityBarTooltip>
      ))}

      <Divider
        flexItem
        sx={{
          marginX: 1,
          marginY: 0.5,
          borderColor: 'divider',
        }}
      />

      {socialLinks.map(({ icon, href, label }) => (
        <ActivityBarTooltip key={label} label={label}>
          <IconButton
            component="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            disableRipple
            sx={iconButtonSx}
          >
            {icon}
          </IconButton>
        </ActivityBarTooltip>
      ))}
    </Box>
  );
};

export default ActivityBar;
