import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = css`
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  padding: 0px 18px;
`;

export const appBar = css`
  height: ${theme.size.appBarHeight};
  display: flex;
  align-items: center;
`;

export const mainTitleBox = css`
  width: 354px;
  padding: 20px 0;
  border-bottom: 2px solid;
`;

export const image = css`
  width: 90px;
  height: 90px;
  background-color: gray;
  border-radius: 13px;
`;

export const item = css`
  display: flex;
  gap: 20px;
  width: 354px;
  justify-content: space-between;
  padding: 18px 0;
  border-bottom: 1px solid ${theme.colors.gray100};
`;

export const content = css`
  display: flex;
  gap: 20px;
`;

export const textBox = css`
  display: flex;
  flex-direction: column;
  padding: 6px 0;
  cursor: pointer;
`;

export const salesStatus = css`
  font-size: 14px;
  font-weight: 600;
  color: ${theme.colors.green200};
`;

export const contentTitle = css`
  padding: 23px 0 7px 0;
`;

export const date = css`
  padding: 6px 0;
`;
