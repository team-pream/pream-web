import { css } from '@emotion/react';
import theme from '@/styles/theme';
import { FABSize } from '@/components/fab';

export const wrapper = css`
  position: fixed;
  bottom: ${theme.size.gnbHeight};
  z-index: ${theme.zIndex.fab};
  min-width: ${theme.size.minWidth};
  max-width: ${theme.size.maxWidth};
  width: 100%;
  height: 0px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const button = ({ size }: { size: FABSize }) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 24px 24px 0;
  border-radius: 50%;
  background: ${theme.colors.yellow100};
  box-shadow: 0px 2px 6px 0px ${theme.colors.grayOpacity200};

  ${size === 's' &&
  css`
    width: 55px;
    height: 55px;
  `}

  ${size === 'm' &&
  css`
    width: 68px;
    height: 68px;
  `}
`;
