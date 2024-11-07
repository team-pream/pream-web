import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const button = ({ isActive }: { isActive: boolean }) => css`
  width: 100%;
  height: 48px;
  border-radius: 10px;
  border: 1px solid ${theme.colors.gray200};
  color: ${theme.colors.gray300};
  transition: all 0.5s ease;

  ${isActive &&
  css`
    color: ${theme.colors.black};
    border: 1px solid ${theme.colors.black};
  `}

  &:hover {
    color: ${theme.colors.black};
    border: 1px solid ${theme.colors.black};
  }
`;
