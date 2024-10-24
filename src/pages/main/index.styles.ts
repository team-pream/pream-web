import { css } from '@emotion/react';

export const wrapper = css`
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  /* background-color: beige; */
  display: flex;
  flex-direction: column;
`;

export const imgIcon = css`
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
  &:hover {
    cursor: pointer;
  }
`;

export const categoryItem = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  font-size: 10px;
  font-weight: 500;
`;
