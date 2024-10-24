import { colors } from '@/styles/colors';
import { css } from '@emotion/react';

export const Wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const KakaoBtn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.kakaoBackground};
  width: 354px;
  height: 45px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 12px;
  margin-top: 70px;
  cursor: pointer;
  border: none;
  gap: 10px;
  color: ${colors.black};
`;

export const Existing = css`
  color: ${colors.gray300};
  font-size: 10px;
`;

export const DescText = css`
  color: ${colors.black};
  font-size: 14px;
  margin-top: 15px;
`;

export const LoginText = css`
  margin-left: 6px;
`;
