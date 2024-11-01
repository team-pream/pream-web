import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px 18px 0 18px;
  gap: 26px;
`;

export const textBox = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 0 60px 0;
  gap: 8px;
`;

export const fixedButtonWrapper = css`
  position: fixed;
  bottom: 23px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;
