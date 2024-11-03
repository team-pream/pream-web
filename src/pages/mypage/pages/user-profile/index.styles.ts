import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const titleContainer = css`
  display: flex;
  margin: 30px 0 11px 28px;
`;

export const line = css`
  width: 90%;
  border: solid 1px ${theme.colors.black};
`;

export const fixContainer = css`
  display: flex;
  flex-direction: column;
  padding: 21px;
  gap: 32px;
`;

export const fixBox = css`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export const fixInfo = css`
  margin-left: 12px;
`;

export const fixedButtonWrapper = css`
  position: fixed;
  bottom: 20px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const placeholderStyle = css`
  input::placeholder {
    color: ${theme.colors.black};
  }
`;
