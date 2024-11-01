import theme from '@/styles/theme';
import { css } from '@emotion/react';
export const profileEditWrapper = css`
  width: 100%;
  height: 100%;
  padding: 0 18px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const profileImageWrapper = css`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 40px 0 33px 0;
`;

export const imageIcon = css`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const uploadIconWrapper = css`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 8px;
  right: 30%;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray100};
`;

export const uploadIcon = css`
  width: 21px;
  height: 18px;
`;

export const formStyle = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 34px 0 100px 0;
`;

export const radioStyle = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const hr = css`
  margin-top: 19px;
  margin-bottom: 0;
  border-color: ${theme.colors.black};
`;

export const fixedButtonWrapper = css`
  position: relative;
  margin-bottom: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const DeleteButton = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  color: ${theme.colors.gray300};
  background-color: ${theme.colors.white};
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
