import { css } from '@emotion/react';
import theme from '@/styles/theme';
export const modalStyle = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 320px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  z-index: 1000;
`;

export const overlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const buttonStyle = css`
  margin-top: 16px;
  padding: 12px 0;
  width: 100%;
  background-color: ${theme.colors.green200};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
`;
