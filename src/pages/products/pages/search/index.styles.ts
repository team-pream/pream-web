import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const infoWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 21px 0 0 0;
`;

export const statusWrapper = css`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const dropdownIcon = css`
  width: 12px;
  margin-inline-start: 5px;
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
  justify-items: center;
`;

export const item = css`
  display: flex;
  flex-direction: column;
  width: fit-content;
  cursor: pointer;
`;

export const imageBox = css`
  position: relative;
`;

export const image = css`
  background-color: lightgray;
  border-radius: 13px;
  width: 100%;
  height: 100%;
`;

export const opacityBox = css`
  display: flex;
  border-radius: 13px;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: ${theme.zIndex.overlay};
  background-color: ${theme.colors.grayOpacity100};
`;

export const soldOutOverlayStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.grayOpacity300};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  z-index: ${theme.zIndex.overlay};
`;

export const textBox = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 6px;
  padding: 8px 0 0 7px;
  cursor: pointer;
`;

export const textWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
  margin: 0px auto;
`;
