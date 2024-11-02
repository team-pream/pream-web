import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = css`
  width: 40px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.green200};
  border-radius: 20px;
  color: ${theme.colors.white};
  margin: 5px 5px 5px 0;
`;
