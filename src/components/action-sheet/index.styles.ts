import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = ({ isShow }: { isShow: boolean }) => css`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: ${theme.size.maxWidth};
  padding: 6px 0 0 0;
  border-radius: 10px 10px 0 0;
  background: ${theme.colors.white};
  z-index: ${theme.zIndex.actionSheet};
  transform: translateX(-50%) ${isShow ? 'translateY(0)' : 'translateY(100%)'};
  transition: transform 0.3s ease-out;
`;

export const handle = css`
  width: 32px;
  height: 2px;
  border-radius: 2px;
  background: ${theme.colors.gray100};
`;

export const menuWrapper = css`
  width: 100%;
`;

export const menu = css`
  width: 100%;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & + & {
    border-top: 1px solid ${theme.colors.gray100};
  }
`;
