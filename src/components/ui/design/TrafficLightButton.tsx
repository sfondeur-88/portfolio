import ButtonBase from '@mui/material/ButtonBase';
import { ReactNode } from 'react';

interface Props {
  colour: string;
  icon: ReactNode;
}

const TrafficLightButton = (props: Props) => {
  const { colour, icon } = props;

  return (
    <ButtonBase
      disableRipple
      sx={{
        width: 12,
        height: 12,
        borderRadius: '50%',
        backgroundColor: colour,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'default',
        '& svg': { opacity: 0, fontSize: 12, color: '#333333', transition: 'opacity 0.1s ease' },
      }}
    >
      {icon}
    </ButtonBase>
  );
};

export default TrafficLightButton;
