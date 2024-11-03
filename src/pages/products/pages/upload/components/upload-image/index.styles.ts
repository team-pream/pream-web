import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  padding: 4px 18px 0 0;
  gap: 8px;
`;

export const uploadImageButton = css`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 7px;
  border: 1px solid ${theme.colors.gray200};
  overflow: hidden;
  cursor: pointer;

  input {
    display: none;
  }
`;

export const thumbnailImage = css`
  width: 70px;
  height: 70px;
  flex-shrink: 0;
  border-radius: 7px;
  background: ${theme.colors.gray100};
  object-fit: cover;
`;

export const imageWrapper = css`
  position: relative;
  width: 70px;
  height: 70px;
`;

export const deleteImageButton = css`
  position: absolute;
  top: -4px;
  right: -4px;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.black100};
  border-radius: 50%;

  div {
    width: 8px;
    height: 1px;
    background: ${theme.colors.white};
    border-radius: 1px;
  }
`;
