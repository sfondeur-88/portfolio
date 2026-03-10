import theme, { Colours } from '@/theme';
import { Typography } from '@mui/material';
import { ReactNode } from 'react';

type TokenType = 'keyword' | 'variable' | 'string';

const TOKEN_COLOURS: Record<TokenType, string> = {
  keyword: Colours.Blue,
  variable: theme.palette.primary.main,
  string: Colours.Orange,
};

interface Props {
  type: TokenType;
  children: ReactNode;
}

const SyntaxToken = (props: Props) => (
  <Typography component="span" sx={{ color: TOKEN_COLOURS[props.type] }}>
    {props.children}
  </Typography>
);

export default SyntaxToken;
