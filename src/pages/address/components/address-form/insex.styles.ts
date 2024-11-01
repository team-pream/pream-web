import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const containTagWrapper = css`
  display: flex;
  margin-bottom: 5px;
`;

export const addressFormWrapper = css`
  width: 100%;
  margin: 0 auto;
  height: calc(100vh - ${theme.size.appBarHeight} - ${theme.size.gnbHeight});
  position: relative;
`;

export const defaultWrapper = css`
  width: 95%;
  margin: 0 auto;
`;
