import Box from '@mui/material/Box';

type Position = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
};

interface Props {
  width: number;
  height: number;
  colour: string; // hex colour
  position: Position;
}

const AuroraGradient = (props: Props) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: `${props.width}px`,
        height: `${props.height}px`,
        borderRadius: '50%',
        background: `radial-gradient(circle at 70% 70%, ${props.colour}, transparent 70%)`,
        boxSizing: 'border-box',
        filter: 'blur(100px)',
        opacity: 0.6,
        zIndex: 0,
        top: props.position.top,
        left: props.position.left,
        right: props.position.right,
        bottom: props.position.bottom,
      }}
    />
  );
};

export default AuroraGradient;
