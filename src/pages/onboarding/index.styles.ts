import { colors } from '@/styles/colors';
import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${theme.size.maxWidth};
  height: 100vh;
`;

export const textBox = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 150px 0 15px 0;
  gap: 8px;
`;

export const duplicateCheckButton = css`
  font-size: 10px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 8px 12px;
  background-color: ${colors.green200};
  color: ${colors.white};
  border-radius: 4px;
  width: 60px;
  height: 35px;
`;

export const progressBarContainer = css`
  width: 100%;
  height: 3px;
  margin-bottom: 20px;
  position: relative;
`;

export const progressBar = (step) => css`
  width: 33.33%;
  height: 100%;
  background-color: ${colors.green200};
  position: absolute;
  top: 58px;
  transform: translateX(${(step - 1) * 100}%);
  transition: transform 0.3s ease;
`;

export const selectContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const selectBox = css`
  width: 163px;
  height: 194px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  background-color: ${colors.gray100};
  border: 2px solid ${colors.gray200};
  color: ${colors.gray300};

  &:hover {
    background-color: ${colors.green100};
    color: ${colors.green200};
    border-color: ${colors.green200};
  }
`;

export const nextButton = ({ isValid }: { isValid: boolean }) => css`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${isValid ? colors.green200 : colors.gray300};
  color: ${colors.white};
  width: 354px;
  height: 45px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 12px;
  cursor: ${isValid ? 'pointer' : 'not-allowed'};
`;

export const completeButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #72dacd;
  color: ${colors.white};
  width: 354px;
  height: 45px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 12px;
  margin-top: 20px;
`;

export const skipButton = css`
  position: absolute;
  bottom: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  color: ${colors.gray300};
  width: 354px;
  height: 45px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 12px;
`;
