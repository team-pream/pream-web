import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const searchbarWrapper = (isFocused: boolean) => css`
  width: 90%;
  margin: 0px auto;
  display: flex;
  border-bottom: 2px solid ${isFocused ? theme.colors.green200 : theme.colors.gray200};
  transition: border-color 0.3s ease;

  input {
    flex: 1;
    outline: none;
    border: none;
    width: 90%;
  }
  input::placeholder {
    font-size: 14px;
  }
  :focus {
    outline: none;
  }
`;
