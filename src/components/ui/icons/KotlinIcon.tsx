import { SvgIcon, SvgIconProps } from '@mui/material';

export const KotlinIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 100 100" fill="none" {...props}>
    <g clipPath="url(#a)">
      <path fill="url(#b)" d="M100 100H0V0h100L48.965 49.275z" />
    </g>
    <defs>
      <radialGradient
        id="b"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="translate(96.675 4.11)scale(114.549)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".003" stopColor="#ef4857" />
        <stop offset=".469" stopColor="#d211ec" />
        <stop offset="1" stopColor="#7f52ff" />
      </radialGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h100v100H0z" />
      </clipPath>
    </defs>
  </SvgIcon>
);
