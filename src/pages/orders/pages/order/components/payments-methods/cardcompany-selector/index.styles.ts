import { colors } from '@/styles/colors';
import { css } from '@emotion/react';

export const selectWrapper = css`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const selectorWrapper = (isSelected: boolean) => css`
  width: 100%;
  padding: 15px 30px;
  border-radius: 10px;
  border: 1px solid ${colors.gray200};
  color: ${colors.gray300};
  background-color: ${isSelected ? colors.gray100 : colors.white}; /* 조건부 배경색 */
  appearance: none; /* 기본 화살표 제거 */
  -webkit-appearance: none;
  -moz-appearance: none;
  &:focus {
    outline: none;
  }
`;

export const arrowIcon = css`
  position: absolute;
  right: 30px;
  font-size: 16px;
  pointer-events: none; /* 클릭 방지 */
`;

export const optionDisabled = css`
  color: ${colors.gray300};
`;

export const optionActive = css`
  color: ${colors.black};
`;
