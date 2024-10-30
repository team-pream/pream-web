import { css } from '@emotion/react';
import theme from '@/styles/theme';

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
  border: 2px solid ${theme.colors.gray200};
  border-top: none;
  border-left: none;
  border-right: none;
  margin-top: 10px;

  &:focus {
    border-color: ${theme.colors.green200};
    outline: none;
  }
  &::placeholder {
    color: ${theme.colors.gray200};
  }
`;

export const styledLabel = css`
  font-size: 14px;
  color: ${theme.colors.gray300};
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
  background-color: ${theme.colors.gray100};
  border: 2px solid ${theme.colors.gray200};
  color: ${theme.colors.gray300};

  &:hover {
    background-color: ${theme.colors.green100};
    color: ${theme.colors.green200};
    border-color: ${theme.colors.green200};
  }
`;

export const nextButton = (isValid) => css`
  position: absolute;
  bottom: 73px;
  background-color: ${isValid ? theme.colors.green200 : theme.colors.gray300};
  color: ${theme.colors.white};
  width: 354px;
  height: 45px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 12px;
  cursor: ${isValid ? 'pointer' : 'not-allowed'};
`;

export const skipButton = css`
  position: absolute;
  bottom: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.white};
  color: ${theme.colors.gray300};
  width: 354px;
  height: 45px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 12px;
`;
