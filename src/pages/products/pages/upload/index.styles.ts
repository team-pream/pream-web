import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = css`
  width: 100%;
  padding: 24px 18px;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
`;

export const hr = css`
  width: 100%;
  height: 2px;
  margin: 19px 0;
`;

export const productInfo = css`
  width: 100%;
  padding: 0 0 50px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const images = css`
  width: 100%;
  display: flex;
  gap: 8px;
`;

export const image = css`
  width: 70px;
  height: 70px;
  border-radius: 7px;
  background: ${theme.colors.gray100};
`;

export const uploadButton = css`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  border: 1px solid ${theme.colors.gray200};

  input {
    display: none;
    width: 100%;
    height: 100%;
  }
`;

export const textarea = css`
  width: 100%;
  height: 233px;
  padding: 20px;
  border-radius: 10px;
  background: ${theme.colors.gray100};
  ${theme.typo.body5};

  &::placeholder {
    color: ${theme.colors.gray300};
  }
`;
