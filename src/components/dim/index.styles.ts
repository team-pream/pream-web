import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = ({ fullScreen }: { fullScreen?: boolean }) =>
  fullScreen
    ? css`
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: ${theme.colors.grayOpacity300};
        z-index: ${theme.zIndex.dim};
        overflow: hidden;
      `
    : css`
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: ${theme.colors.grayOpacity300};
        z-index: ${theme.zIndex.dim};
        overflow: hidden;
      `;
