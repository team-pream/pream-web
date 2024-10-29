import theme from '@/styles/theme';
import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const categoryIcon = css`
  width: 46px;
  height: 46px;
`;

export const categoryList = css`
  display: flex;
  justify-content: center;
  margin-top: 37px;
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
  margin: 40px 0 calc(${theme.size.gnbHeight} + 18px) 18px;
`;

export const itemList = css`
  margin-top: 15px;
  display: flex;
  gap: 9px;
  margin-bottom: 30px;
  overflow: auto;
  padding-right: 18px;
`;

export const item = css`
  display: flex;
  flex-direction: column;
`;

export const imageBox = css`
  position: relative;
`;

export const image = css`
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

export const textBox = css`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px 0 0 7px;
  cursor: pointer;
`;

export const itemTitle = css`
  display: block;
  width: 106px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
