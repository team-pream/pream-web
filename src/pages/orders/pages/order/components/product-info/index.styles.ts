import { colors } from '@/styles/colors';
import { css } from '@emotion/react';

export const productInfoWrapper = css`
  margin: 18px auto;
`;

export const innerWrapper = css`
  display: flex;
  margin: 15px auto;
`;

export const productImg = css`
  width: 62px;
  height: 60px;
  border-radius: 8px;
  background-color: ${colors.gray200};
  margin-right: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const textWrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: auto 0;
`;
