import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = css`
  padding: 8px 20px;
  border-radius: 20px;
  border: 1px solid ${theme.colors.gray200};
  color: ${theme.colors.gray300};
  background: ${theme.colors.white};
`;
