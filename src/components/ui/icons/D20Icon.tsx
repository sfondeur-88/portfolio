import { SvgIcon, SvgIconProps } from '@mui/material';

/**
 * D20 icon — pointy-top hexagon (like the reference image) with "20" centered.
 *
 * Pointy-top hex vertices (r=46, centered at 50,50):
 *   top:        (50,  4)
 *   upper-right:(90, 27)
 *   lower-right:(90, 73)
 *   bottom:     (50, 96)
 *   lower-left: (10, 73)
 *   upper-left: (10, 27)
 *
 * Small arcs (rx=4) round each tip without killing the point sharpness.
 */
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
      fill="currentColor"
    />
    <text
      x="50"
      y="63"
      textAnchor="middle"
      fontSize="36"
      fontWeight="800"
      fontFamily="sans-serif"
      fill="#021628"
    >
      20
    </text>
  </SvgIcon>
);
