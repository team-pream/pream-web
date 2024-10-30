import { colors } from '@/styles/colors';
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
  background-color: ${theme.colors.green200};
  color: ${colors.white};
  border-radius: 4px;
  width: 60px;
  height: 35px;
`;

export const styledLabel = css`
  font-size: 14px;
  color: ${theme.colors.gray300};
`;

export const nextButton = (isValid) => css`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${isValid ? theme.colors.green200 : theme.colors.gray300};
  color: ${theme.colors.white};
  width: 354px;
  height: 45px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 12px;
  cursor: ${isValid ? 'pointer' : 'not-allowed'};
`;
