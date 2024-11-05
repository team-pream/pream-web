import { colors } from '@/styles/colors';
import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  justify-content: space-between;
`;

export const radioButtonWrapper = css`
  display: flex;
  align-items: center;
`;

export const customCheckbox = css`
  width: 14px;
  height: 14px;
  border: 1px solid ${colors.gray200};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 50%; /* 둥근 모서리 */
`;

export const customCheckboxInner = css`
  width: 8px;
  height: 8px;
  border: none;
  border-radius: 50%;
  transition: background-color 0.2s;
`;
