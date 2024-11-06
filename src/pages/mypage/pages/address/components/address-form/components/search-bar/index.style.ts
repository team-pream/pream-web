import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const searchBarWrapper = (isFocused: boolean) => css`
  width: 100%;
  margin: 0px auto;
  display: flex;
  border-bottom: 2px solid ${isFocused ? theme.colors.green200 : theme.colors.gray200};
  transition: border-color 0.3s ease;
  justify-content: flex-end;
  :focus {
    outline: none;
  }
  input::placeholder {
    font-size: 14px;
  }
  input {
    flex: 1;
    border: none;
    outline: none;
  }
`;

export const searchIconStyle = css`
  width: 20px;
  margin: 10px;
  cursor: pointer;
`;
