import { css } from '@emotion/react';
import theme from '@/styles/theme';
import { FABSize } from '.';

export const wrapper = ({ size }: { size: FABSize }) => css`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: ${theme.zIndex.fab};
  display: flex;
  align-items: center;
  justify-content: center;
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
