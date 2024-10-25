import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = css`
  width: ${theme.size.maxWidth};
  margin: 0 auto;
`;

export const wrapperMenu = css`
  margin: 10px;
  width: ${theme.size.maxWidth};
  height: 710px;
  margin: 0 auto;
`;

export const hr = css`
  border-color: ${theme.colors.black};
`;
export const gridWrapper = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 기본적으로 4개의 열로 나누기 */
  gap: 10px;
  justify-items: center;
  align-items: start;
  padding: 10px;
`;
