import { css } from '@emotion/react';
import theme from '@/styles/theme';
export const overlayStyle = (isOpen: boolean) => css`
  position: fixed;
  top: 0;
  width: 389px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${isOpen ? 'block' : 'none'};
  z-index: 1000;
`;

export const sheetStyle = css`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%); /* 가로 중앙 정렬 */
  width: 100%;
  max-width: 390px;
  background-color: white;
  border-radius: 16px 16px 0 0;
  animation: slide-up 0.3s ease-out;
  z-index: 1001;
  text-align: center;

  @keyframes slide-up {
    from {
      transform: translateY(100%) translateX(-50%);
    }
    to {
      transform: translateY(0) translateX(-50%);
    }
  }
`;

export const SheetList = css`
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid ${theme.colors.gray100};
  cursor: pointer;
`;
