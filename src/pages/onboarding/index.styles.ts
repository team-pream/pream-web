import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = css`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const progressBarContainer = css`
  width: 100%;
  height: 3px;
  position: relative;
`;

export const progressBar = ({ step }: { step: number }) => css`
  width: 33.33%;
  height: 100%;
  background-color: ${theme.colors.green200};
  transform: translateX(${(step - 1) * 100}%);
  transition: transform 0.3s ease;
`;

export const skipButton = css`
  position: relative;
  bottom: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.white};
  color: ${theme.colors.gray300};
  width: 100%;
  height: 45px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 12px;
`;
