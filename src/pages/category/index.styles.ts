import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = css`
  margin: 10px;
  width: ${theme.size.maxWidth};
  height: 710px;
`;

export const gridWrapper = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 기본적으로 4개의 열로 나누기 */
  gap: 10px;
  justify-items: center;
  align-items: start;
  padding: 10px;
`;

//임시 - 나중에 삭제예정
export const header = css`
  width: ${theme.size.maxWidth};
  height: 60px;
  border-bottom: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.black};
`;
