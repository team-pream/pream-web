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

export const input = ({ errorMessage }: { errorMessage?: string }) => css`
  width: 100%;
  padding: 10px 12px;
  ${theme.typo.body5};

  border-bottom: ${errorMessage
    ? `1px solid ${theme.colors.red100}`
    : `1px solid ${theme.colors.gray200}`};

  &:focus {
    border-bottom: ${errorMessage
      ? `1px solid ${theme.colors.red100}`
      : `1px solid ${theme.colors.green200}`};
  }

  &::placeholder {
    color: ${theme.colors.gray200};
  }
`;

export const error = css`
  margin: 5px 0 0 0;
  padding: 0 12px;
`;
