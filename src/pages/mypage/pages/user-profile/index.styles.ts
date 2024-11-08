import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const mainWrapper = css`
  width: 100%;
  height: 100%;
  padding: 0 18px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 80px;
`;

export const titleContainer = css`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const line = css`
  width: 100%;
  border-bottom: solid 2px ${theme.colors.black};
`;

export const fixContainer = css`
  display: flex;
  flex-direction: column;
  padding: 21px 5px;
  gap: 30px;
  margin-bottom: 12px;
`;

export const fixBox = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const fixInfo = css`
  margin-left: 3%;
`;

export const buttonWrapper = css`
  position: fixed;
  bottom: 10px;
  margin: 0 auto;
  z-index: ${theme.zIndex.gnb};
  width: 100%;
  max-width: ${theme.size.maxWidth};
  padding: 0 18px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const placeholderStyle = css`
  input::placeholder {
    color: ${theme.colors.black};
  }
`;

export const accountContainer = css`
  display: flex;
  flex-direction: column;
  padding: 21px 5px;
  gap: 30px;
  margin-top: 12px;
`;
