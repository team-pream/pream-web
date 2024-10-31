import theme from '@/styles/theme';
import { css } from '@emotion/react';
export const profileEditWrapper = css`
  width: 100%;
  height: 100%;
  padding: 0 18px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const profileImageWrapper = css`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
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
  right: 130px;
  background-color: ${theme.colors.white};
  box-shadow: 0 0 8px ${theme.colors.gray300};
`;

export const uploadIcon = css`
  width: 21px;
  height: 18px;
`;

export const formStyle = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const radioStyle = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const radio = css`
  gap: 10px;
`;
