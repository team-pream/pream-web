import { css } from '@emotion/react';

export const gridWrapper = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 기본적으로 4개의 열로 나누기 */
  gap: 10px;
  justify-items: center;
  align-items: start;
  padding: 10px;
`;

export const gridItem = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
  }

  span {
    font-size: 10px;
    color: #333;
  }
`;
