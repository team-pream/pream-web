import { css } from '@emotion/react';

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
