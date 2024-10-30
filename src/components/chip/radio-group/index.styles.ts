import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const chipRadioGroup = css`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const chipRadio = ({ isSelected }: { isSelected: boolean }) => css`
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
    border: 0px;
    clip: rect(0px, 0px, 0px, 0px);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0px;
    position: absolute;
    width: 1px;
    white-space: nowrap;
    overflow-wrap: normal;
  }
`;
