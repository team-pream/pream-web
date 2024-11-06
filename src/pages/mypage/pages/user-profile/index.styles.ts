import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const titleContainer = css`
  display: flex;
  padding: 6% 0 2% 7%;
`;

export const line = css`
  width: 90%;
  border: solid 1px ${theme.colors.black};
`;

export const fixContainer = css`
  display: flex;
  flex-direction: column;
  padding: 5%;
  gap: 32px;
`;

export const fixBox = css`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export const fixInfo = css`
  margin-left: 3%;
`;

export const fixedButtonWrapper = css`
  position: fixed;
  bottom: 2%;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const placeholderStyle = css`
  input::placeholder {
    color: ${theme.colors.black};
  }
`;

export const accountContainer = css`
  display: flex;
  flex-direction: column;
  padding: 5%;
  gap: 32px;
`;

export const actionSheet = css`
  max-height: 380px; /* 최대 높이를 380px로 설정 */
`;
