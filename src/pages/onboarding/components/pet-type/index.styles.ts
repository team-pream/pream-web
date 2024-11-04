import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12% 4% 0 4%;
`;

export const textBox = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 0 18% 0;
  gap: 8px;
`;

export const selectContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

export const selectZone = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const selectBox = (isSelected: boolean) => css`
  width: 163px;
  height: 194px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 17px;
  background-color: ${theme.colors.gray100};
  border: 1px solid ${isSelected ? theme.colors.green200 : theme.colors.gray200};
  color: ${theme.colors.gray300};

  &:hover {
    background-color: ${theme.colors.green100};
    color: ${theme.colors.green200};
    border-color: ${theme.colors.green200};
  }
`;

export const fixedButtonWrapper = css`
  position: fixed;
  bottom: 7.5%;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;
