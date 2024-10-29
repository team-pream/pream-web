import { colors } from '@/styles/colors';
import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = css`
  width: ${theme.size.maxWidth};
  background-color: ${colors.white};
`;
export const contentWrapper = css`
  padding: ${theme.size.gnbHeight} 0 ${theme.size.gnbHeight};
  height: auto;
`;
