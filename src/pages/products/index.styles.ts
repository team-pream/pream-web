import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = css`
  /* width: ${theme.size.maxWidth}; */
  width: 400px;
  height: 100vh;
  margin: 0 auto;
  /* border: 1px solid ${theme.colors.gray200}; */
`;

export const title = css`
  font-size: 24px;
  font-weight: 600;
  margin: 18px;
`;

export const productsWrapper = css`
  width: 100%;
  padding: 0 18px;
`;

export const infoWrapper = css`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  align-items: center;
`;

export const dropdownIcon = css`
  width: 12px;
  margin-inline-start: 5px;
`;

export const span = css`
  width: fit-content;
  color: ${theme.colors.black100};
`;

export const countText = css`
  flex: 1;
  color: ${theme.colors.gray300};
`;

export const statusWrapper = css`
  display: flex;
  align-items: center;
  position: relative;
`;

export const dropdownWrapper = css`
  position: relative;
  display: inline-block;
`;

export const dropdownMenu = css`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid ${theme.colors.gray300};
  border-radius: 4px;
  width: 100px;
  z-index: 10;
`;

export const dropdownItem = css`
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.gray100};
  }
`;

export const listWrapper = css`
  width: 100%;
  height: 100%;
  margin-top: 15px;
  margin-bottom: 30px;
`;

export const itemList = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow: auto;
  gap: 18px;
`;

export const item = css`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const imageBox = css`
  position: relative;
`;

export const sampleImage = css`
  background-color: lightgray;
  border-radius: 13px;
  width: 170px;
  height: 170px;
`;

export const opacityBox = css`
  display: flex;
  border-radius: 13px;
  width: 170px;
  height: 170px;
  position: absolute;
  z-index: 1;
  background-color: ${theme.colors.grayOpacity100};
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
