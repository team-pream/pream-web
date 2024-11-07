import { css } from '@emotion/react';

export const gridItem = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  img {
    width: 100%;
    max-width: 64px;
  }
`;

export const categoryItems = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  padding: 26px 28px;
`;

export const categoryItem = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const imageSkeleton = css`
  width: 100%;
  max-width: 64px;
`;
