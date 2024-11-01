import { colors } from '@/styles/colors';
import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = css`
  width: 100%;
  padding: 0 0 calc(${theme.size.gnbHeight} + 18px);
  display: flex;
  flex-direction: column;
`;

export const progressBarContainer = css`
  width: 100%;
  height: 3px;
  margin-bottom: 20px;
  position: relative;
`;

export const progressBar = ({ step }: { step: number }) => css`
  width: 33.33%;
  height: 100%;
  background-color: ${colors.green200};
  transform: translateX(${(step - 1) * 100}%);
  transition: transform 0.3s ease;
`;

export const skipButton = css`
  position: absolute;
  bottom: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  color: ${colors.gray300};
  width: 100%;
  height: 45px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 12px;
`;
