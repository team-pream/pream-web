import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = css`
  width: 100%;
  height: 40px;
  padding: 10px 24px;
  display: flex;
  align-items: center;
  border-radius: 18px;
  background: ${theme.colors.gray100};
`;

export const input = css`
  display: flex;
  flex: 1;
  ${theme.typo.body2};
`;
