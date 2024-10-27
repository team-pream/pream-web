import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = css`
  max-width: ${theme.size.maxWidth};
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

export const dropdownOverlayStyle = (isOpen: boolean) => css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 10;
  display: ${isOpen ? 'block' : 'none'};
`;

export const dropdownMenuStyle = (isOpen: boolean) => css`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: ${theme.size.maxWidth};
  background: white;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  z-index: 11;
  display: ${isOpen ? 'block' : 'none'};
`;
export const menuItemStyle = css`
  padding: 20px;
  font-size: 16px;
  color: ${theme.colors.black100};
  text-align: center;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  &:last-child {
    border-bottom: none;
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

export const image = css`
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

export const soldOutOverlayStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 170px;
  height: 170px;
  background-color: ${theme.colors.grayOpacity300};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  z-index: 2; // opacityBox보다 위에 배치

  span {
    color: ${theme.colors.white};
    font-weight: bold;
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
