import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = css`
  width: 100%;
  padding: 18px 0 36px 0;
  border-top: 2px solid ${theme.colors.black};
`;

export const grid = css`
  display: flex;
  flex-direction: column;
  margin: 17px 0 0 0;
  gap: 7px;
`;

export const selectBox = css`
  display: flex;
  gap: 9px;
`;
