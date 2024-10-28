import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = css`
  width: ${theme.size.maxWidth};
  padding: ${theme.size.appBarHeight} 0 0 0;
  margin: 0 auto;
`;

export const menuWrapper = css`
  width: ${theme.size.maxWidth};
  padding: 24px 18px;
  margin: 0 auto;
`;

export const hr = css`
  margin-top: 11px;
  border-color: ${theme.colors.black};
`;

export const gridWrapper = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 기본적으로 4개의 열로 나누기 */
  padding: 26px 28px;
  gap: 21px;
`;
