import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const ButtonStyle = css`
  position: relative;
  bottom: 18px; /* Footer 높이(48px) + 10px */
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  padding: 16px 0px;
  background-color: ${theme.colors.green200};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
