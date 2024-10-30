import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const inputWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 354px;
  margin-top: 80px;
`;

export const selectContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
  gap: 30px;
`;

export const selectZone = css`
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

export const nextButton = ({ isValid }: { isValid: boolean }) => css`
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

export const textBox = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 90px 0 45px 0;
  gap: 8px;
`;

export const fixedButtonWrapper = css`
  position: fixed;
  bottom: 73px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;
