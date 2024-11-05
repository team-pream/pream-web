import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 18px;
`;

export const textBox = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 103px 0;
  gap: 8px;
`;

export const text = css`
  margin-bottom: 30px;
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
  background-color: ${isSelected ? theme.colors.green100 : theme.colors.gray100};
  border: 1px solid ${isSelected ? theme.colors.green200 : theme.colors.gray200};
  color: ${theme.colors.gray300};

  &:hover {
    background-color: ${theme.colors.green100};
    color: ${theme.colors.green200};
    border-color: ${theme.colors.green200};
  }
`;

export const buttonWrapper = css`
  position: fixed;
  bottom: 10px;
  margin: 0 auto;
  z-index: ${theme.zIndex.gnb};
  width: 100%;
  max-width: ${theme.size.maxWidth};
  padding: 0 18px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const skipButton = css`
  position: relative;
  bottom: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.white};
  color: ${theme.colors.gray300};
  width: 100%;
  height: 45px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 12px;
`;
