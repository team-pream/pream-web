import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const wrapper = css`
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const categoryIcon = css`
  width: 46px;
  height: 46px;
`;

export const categoryList = css`
  display: flex;
  margin-left: 67px;
`;

export const categoryItems = css`
  display: grid;
  gap: 22px 24px;
  grid-template-columns: repeat(4, 1fr);
  cursor: pointer;
`;

export const categoryItem = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  font-size: 10px;
  font-weight: 500;
`;

export const listWrapper = css`
  margin: 40px 0 0 18px;
`;

export const listTitle = css`
  font-size: 16px;
  font-weight: 600;
`;

export const itemList = css`
  margin-top: 15px;
  display: flex;
  gap: 9px;
  margin-bottom: 30px;
  overflow: auto;
`;

export const item = css`
  display: flex;
  flex-direction: column;
`;

export const imageBox = css`
  position: relative;
`;

export const sampleImage = css`
  background-color: lightgray;
  border-radius: 13px;
  width: 120px;
  height: 120px;
`;

export const opacityBox = css`
  display: flex;
  border-radius: 13px;
  width: 120px;
  height: 120px;
  position: absolute;
  z-index: 1;
  background-color: ${theme.colors.grayOpacity200};
`;

export const heartIcon = css`
  width: 18px;
  height: 15px;
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 2;
  cursor: pointer;
  path {
    fill: ${theme.colors.white};
  }
`;

export const textBox = css`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px 0 0 7px;
  cursor: pointer;
`;

export const itemTitle = css`
  font-size: 12px;
  font-weight: 500;
`;

export const itemPrice = css`
  font-size: 16px;
  font-weight: 600;
`;
