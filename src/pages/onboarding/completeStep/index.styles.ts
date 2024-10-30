import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const textBox = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 70px 0 30px 0;
`;

export const welcomeText = css`
  font-size: 24px;
  color: ${theme.colors.black};
`;

export const highlightText = css`
  font-size: 24px;
  color: ${theme.colors.green200};
`;

export const pleaseText = css`
  color: ${theme.colors.gray300};
  font-size: 14px;
`;

export const completeButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #72dacd;
  color: ${theme.colors.white};
  width: 354px;
  height: 45px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 12px;
  margin-top: 20px;
`;
