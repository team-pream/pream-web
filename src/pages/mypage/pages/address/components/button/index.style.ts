import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const ButtonStyle = css`
  position: relative;
  top: 310px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding: 16px 0;
  background-color: ${theme.colors.green200};
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
