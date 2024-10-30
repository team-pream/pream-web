import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const radioGroup = css`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const radio = css`
  display: flex;
  align-items: center;
  gap: 7px;
  transition: all 0.2s;
  cursor: pointer;

  input[type='radio'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    box-shadow: 0 0 0 1px ${theme.colors.gray200};
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
  }

  input[type='radio']:checked {
    width: 12px;
    height: 12px;
    background: ${theme.colors.green200};
    border: 2px solid ${theme.colors.white};
  }
`;
