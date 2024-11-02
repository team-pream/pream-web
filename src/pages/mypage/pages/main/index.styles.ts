import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const mypageWrapper = css`
  width: 100%;
  height: 100%;
  padding: 24px 18px;
  display: flex;
  flex-direction: column;
`;

export const nicknameWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 45px;
`;

export const myPetWrapper = css`
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const profileAddWrapper = css`
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 18px;
`;

export const imageStyle = css`
  width: 60px;
  height: 60px;
`;

export const imageIcon = css`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const nicknameStyle = css`
  width: 100%;
  height: 80px;
  margin-inline-start: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const petNameWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const myTradeWrapper = css`
  width: 100%;
  height: 100%;
  margin-bottom: 48px;
`;

export const myAccountWrapper = css`
  width: 100%;
  height: 100%;
`;

export const nextIcon = css`
  width: 10px;
  height: 12px;
  cursor: pointer;
`;

export const logoutStyle = css`
  cursor: pointer;
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const plusWrapper = css`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${theme.colors.gray100};
  margin: 25px 0 14px 0;
`;

export const plusIcon = css`
  height: 14px;
  margin: 8px;
`;

export const hr = css`
  margin: 10px 0 0 0;
`;

export const menuline = css`
  margin: 0;
`;
