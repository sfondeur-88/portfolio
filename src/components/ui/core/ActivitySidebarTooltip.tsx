import Tooltip from '@mui/material/Tooltip';

interface ActivityBarTooltipProps {
  label: string;
  children: React.ReactElement;
}

const ActivityBarTooltip = (props: ActivityBarTooltipProps) => {
  const { label, children } = props;

  return (
    <Tooltip
      title={label}
      placement="right"
      arrow
      enterDelay={600}
      slotProps={{
        tooltip: {
          sx: {
            backgroundColor: '#1e2530',
            color: 'text.primary',
            fontSize: 12,
            fontWeight: 400,
            padding: '4px 8px',
            borderRadius: 1,
            border: '1px solid',
            borderColor: 'divider',
            boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
          },
        },
        arrow: {
          sx: {
            color: '#1e2530',
          },
        },
      }}
    >
      {children}
    </Tooltip>
  );
};

export default ActivityBarTooltip;
