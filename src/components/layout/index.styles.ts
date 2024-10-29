import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = css`
  width: 100%;
  min-width: ${theme.size.minWidth};
  max-width: ${theme.size.maxWidth};
  height: 100vh;
  margin: 0 auto;
  overscroll-behavior-y: contain;
`;

export const main = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
