import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = css`
  width: ${theme.size.maxWidth};
  height: 100vh;
  padding: ${theme.size.appBarHeight} 0 0 0;
  margin: 0 auto;
`;

export const mypageWrapper = css`
  width: ${theme.size.maxWidth};
  height: 80vh;
  padding: 24px 18px;
`;

export const myPetWrapper = css`
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const profileAddWrapper = css`
  width: 100%;
  height: 80px;
  margin: 28px 32px 38px;
  border-radius: 10px;
  border: 1px solid ${theme.colors.gray200};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const myTradeWrapper = css`
  width: 100%;
  height: 20vh;
`;

export const myAccountWrapper = css`
  width: 100%;
  height: 40vh;
`;

export const menuWrapper = css`
  cursor: pointer;
`;
