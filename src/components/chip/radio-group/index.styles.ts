import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const chipRadioGroup = ({ wrap }: { wrap: boolean }) => css`
  display: flex;
  gap: 8px;

  ${wrap
    ? css`
        width: 100%;
        flex-wrap: wrap;
      `
    : css`
        flex-wrap: nowrap;
        overflow: auto;
      `}
`;

export const chipRadio = ({ isSelected }: { isSelected: boolean }) => css`
  display: flex;
  flex-shrink: 0;
  position: relative;
  padding: 8px 20px;
  border-radius: 20px;
  transition: all 0.2s;
  cursor: pointer;

  ${isSelected
    ? css`
        color: ${theme.colors.white};
        background: ${theme.colors.green200};
        border: 1px solid transparent;
      `
    : css`
        color: ${theme.colors.gray300};
        background: ${theme.colors.white};
        border: 1px solid ${theme.colors.gray200};
      `}

  input {
    display: none;
    padding: 0;
  }
`;
