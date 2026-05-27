import Box from '@mui/material/Box';

type ResponsiveNumber = number | { xs?: number; sm?: number; md?: number };

type Position = {
  top?: ResponsiveNumber;
  left?: ResponsiveNumber;
  right?: ResponsiveNumber;
  bottom?: ResponsiveNumber;
};

interface Props {
  width: ResponsiveNumber;
  height: ResponsiveNumber;
  colour: string;
  position: Position;
  blur?: ResponsiveNumber;
}

const toResponsive = (val?: ResponsiveNumber) => {
  if (val === undefined) return undefined;
  if (typeof val === 'number') return `${val}px`;
  return Object.fromEntries(Object.entries(val).map(([bp, v]) => [bp, `${v}px`]));
};

const AuroraGradient = (props: Props) => {
  const blur = props.blur ?? 150;
  const blurValue =
    typeof blur === 'number'
      ? `blur(${blur}px)`
      : Object.fromEntries(Object.entries(blur).map(([bp, v]) => [bp, `blur(${v}px)`]));

  return (
    <Box
      sx={{
        position: 'fixed',
        width: toResponsive(props.width),
        height: toResponsive(props.height),
        borderRadius: '50%',
        background: `radial-gradient(circle at 70% 70%, ${props.colour}, transparent 70%)`,
        boxSizing: 'border-box',
        filter: blurValue,
        opacity: 0.6,
        zIndex: 0,
        top: toResponsive(props.position.top),
        left: toResponsive(props.position.left),
        right: toResponsive(props.position.right),
        bottom: toResponsive(props.position.bottom),
        pointerEvents: 'none',
      }}
    />
  );
};

export default AuroraGradient;
