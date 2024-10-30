import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const mypageWrapper = css`
  width: 100%;
  height: 100%;
  padding: 24px 18px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const myPetWrapper = css`
  width: 100%;
  height: 100%;
  gap: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const profileAddWrapper = css`
  width: 100%;
  height: 80px;
  border-radius: 10px;
  border: 1px solid ${theme.colors.gray200};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const imageStyle = css`
  width: 80px;
  height: 80px;
`;

export const imageIcon = css`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const nicknameStyle = css`
  width: 100%;
  height: 80px;
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
`;

export const plusIcon = css`
  height: 14px;
  margin: 8px;
`;
