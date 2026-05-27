import { SvgIcon, SvgIconProps } from '@mui/material';

export const D20Icon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 100 100" {...props}>
    <path
      d="
        M 44 7
        A 10 10 0 0 1 56 7
        L 88 25
        Q 92 27 92 31
        L 92 69
        Q 92 73 88 75
        L 56 93
        A 10 10 0 0 1 44 93
        L 12 75
        Q 8 73 8 69
        L 8 31
        Q 8 27 12 25
        Z
      "
      fill="#b62626"
    />
    <text
      x="50"
      y="63"
      textAnchor="middle"
      fontSize="40"
      fontWeight="800"
      fontFamily="sans-serif"
      fill="#FFF"
    >
      20
    </text>
  </SvgIcon>
);
