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
  height: 100%;
  padding: ${theme.size.appBarHeight} 0 0 0;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
