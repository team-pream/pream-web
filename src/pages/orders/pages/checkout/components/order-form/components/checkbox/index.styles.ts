import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  justify-content: space-between;
`;

export const radioButtonWrapper = css`
  display: flex;
  align-items: center;

  input {
    display: none;
  }
`;

export const customCheckbox = css`
  width: 14px;
  height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 50%;
  border: 1px solid ${theme.colors.gray200};
`;

export const customCheckboxInner = ({ isChecked }: { isChecked: boolean }) => css`
  width: 8px;
  height: 8px;
  border: none;
  border-radius: 50%;
  transition: background-color 0.2s;
  background: ${isChecked ? theme.colors.green200 : theme.colors.gray100};
`;
