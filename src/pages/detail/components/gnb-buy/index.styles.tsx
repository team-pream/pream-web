import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = css`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: ${theme.zIndex.gnb};
  width: 100%;
  max-width: ${theme.size.maxWidth};
  padding: 12px 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: ${theme.colors.white};
  box-shadow: 0px -4px 6px 0px ${theme.colors.grayOpacity100};
`;

export const menuItem = ({ isActive }: { isActive: boolean }) => css`
  width: 88px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;

  svg {
    path {
      fill: ${isActive ? theme.colors.green200 : theme.colors.black100};
    }
    rect {
      stroke: ${isActive ? theme.colors.green200 : theme.colors.black100};
    }
  }
`;

// TODO: Text 컴포넌트로 전환
export const menuLabel = ({ isActive }: { isActive: boolean }) => css`
  font-weight: 400;
  font-size: 12px;
  color: ${isActive ? theme.colors.green200 : theme.colors.black100};
`;
