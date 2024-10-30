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
  margin: 70px 0 30px 0;
`;

export const welcomeText = css`
  font-size: 24px;
  color: ${colors.black};
`;

export const highlightText = css`
  font-size: 24px;
  color: ${colors.green200};
`;

export const pleaseText = css`
  color: ${colors.gray300};
  font-size: 14px;
`;

export const inputWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 354px;
  margin-top: 80px;
`;

export const inputField = css`
  width: 100%;
  padding: 8px;
  border: 2px solid ${colors.gray200};
  border-top: none;
  border-left: none;
  border-right: none;
  margin-top: 10px;

  &:focus {
    border-color: ${colors.green200};
    outline: none;
  }
  &::placeholder {
    color: ${colors.gray200};
  }
`;

export const inputContainer = css`
  position: relative;
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

export const styledLabel = css`
  font-size: 14px;
  color: ${colors.gray300};
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
  left: 0;
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

export const navBar = css`
  width: 390px;
  height: 58px;
  display: flex;
  align-items: center;
`;

export const nextButton = (isValid) => css`
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
