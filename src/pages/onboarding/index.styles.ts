import { css } from '@emotion/react';

export const Wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const TextBox = css`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WelcomeText = css`
  font-size: 24px;
  color: #000000;
`;

export const HighlightText = css`
  font-size: 24px;
  color: #72dacd;
`;

export const PleaseText = css`
  color: #aeaeae;
  font-size: 14px;
`;

export const InputWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
`;

export const InputField = css`
  width: 100%;
  padding: 8px;
  border: 2px solid #d9d9d9;
  border-top: none;
  border-left: none;
  border-right: none;
  margin-top: 10px;

  &:focus {
    border-color: #72dacd;
    outline: none;
  }
`;

export const InputContainer = css`
  position: relative;
  width: 100%;
`;

export const InputFieldWithButton = css`
  width: 100%;
  padding: 8px;
  border: 2px solid #d9d9d9;
  border-top: none;
  border-left: none;
  border-right: none;
  margin-top: 10px;

  &:focus {
    border-color: #72dacd;
    outline: none;
  }
`;

export const DuplicateCheckButton = css`
  width: 64px;
  height: 35px;
  font-size: 10px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 8px 12px;
  background-color: #72dacd;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const StyledLabel = css`
  font-size: 14px;
  color: #aeaeae;
`;

export const NextBtn = css`
  position: absolute;
  bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #72dacd;
  color: white;
  width: 354px;
  height: 45px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 12px;
  margin-top: 80px;
  cursor: pointer;
  border: none;
`;

export const ProgressBarContainer = css`
  width: 100%;
  height: 3px;
  background-color: #e0e0e0;
  margin-bottom: 20px;
  position: relative;
`;

export const ProgressBar = (step) => css`
  width: 33.33%;
  height: 100%;
  background-color: #72dacd;
  position: absolute;
  left: 0;
  transform: translateX(${(step - 1) * 100}%);
  transition: transform 0.3s ease;
`;

export const SelectContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const SelectBox = css`
  width: 163px;
  height: 194px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
`;
