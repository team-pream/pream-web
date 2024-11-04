import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = css`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const label = css`
  margin-bottom: 6px;
`;

export const inputWrapper = ({
  errorMessage,
  isFocused,
}: {
  errorMessage?: string;
  isFocused: boolean;
}) => css`
  display: flex;
  align-items: center;
  padding: 4px 0;

  border-bottom: ${errorMessage
    ? `1px solid ${theme.colors.red300}`
    : isFocused
      ? `1px solid ${theme.colors.green200}`
      : `1px solid ${theme.colors.gray200}`};

  transition: border-bottom 0.2s ease;
`;

export const input = css`
  display: flex;
  text-align: left;
  flex: 1;
  padding: 6px 12px;

  ${theme.typo.body5};

  &::placeholder {
    color: ${theme.colors.gray200};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const infoTextWrapper = css`
  margin: 5px 0 0 0;
  padding: 0 12px;
`;
