import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${theme.zIndex.appBar};
  width: 100%;
  height: 58px;
  max-width: ${theme.size.maxWidth};
  background: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 18px;
  gap: 16px;
`;
