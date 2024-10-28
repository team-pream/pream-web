import { colors } from '@/styles/colors';
import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const kakaoButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.kakaoBackground};
  width: 354px;
  height: 45px;
  border-radius: 10px;
  margin: 85px 0 12px 0;
  cursor: pointer;
  border: none;
  gap: 10px;
  color: ${colors.black};
`;

export const subtitle = css`
  margin-top: 15px;
`;

export const loginText = css`
  margin-left: 6px;
  cursor: pointer;
`;
