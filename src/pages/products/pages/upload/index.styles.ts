import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = css`
  width: 100%;
  padding: 24px 0px 100px 0px;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
`;

export const hr = css`
  width: 100%;
  height: 2px;
  margin: 19px auto;
`;

export const productInfo = css`
  width: 100%;
  padding: 0 0 50px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const textarea = css`
  width: 100%;
  height: 233px;
  padding: 20px;
  border-radius: 10px;
  background: ${theme.colors.gray100};
  ${theme.typo.body5};
  line-height: 1.6;

  &::placeholder {
    color: ${theme.colors.gray300};
  }
`;

export const fixedCTAButtonWrapper = css`
  position: fixed;
  bottom: 0;
  padding: 18px;
  width: 100%;
  min-width: ${theme.size.minWidth};
  max-width: ${theme.size.maxWidth};
  margin: 0 auto;
`;
