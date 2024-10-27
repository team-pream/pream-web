import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const searchResultWrapper = css`
  width: 90%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
`;

export const searchTitle = css`
  font-size: 16px;
  font-weight: 600;
  margin: 10px 0px;
`;

export const addressTag = css`
  width: 40px;
  height: 18px;
  background-color: ${theme.colors.gray100};
  color: #626872;
  border-radius: 3px;
  font-size: 10px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  margin: auto 0;
  margin-right: 10px;
`;

export const resultAddress = css`
  width: 100%;
  margin: 0 auto;
  margin: 5px 0;
  cursor: pointer;
  display: flex;
  font-size: 14px;
`;

export const inputStyle = (isFocused: boolean) => css`
  margin: 0px auto;
  display: flex;
  border-bottom: 2px solid ${isFocused ? theme.colors.green200 : theme.colors.gray200};
  transition: border-color 0.3s ease;
  justify-content: flex-end;
  :focus {
    outline: none;
  }
  input {
    margin: 10px;
    font-size: 14px;
    flex: 1;
    border: none;
    outline: none;
  }
  input::placeholder {
    font-size: 12px;
    color: ${theme.colors.gray300};
  }
`;
