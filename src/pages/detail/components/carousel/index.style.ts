import { css } from '@emotion/react';

export const CarouselWrapper = css`
  position: relative;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const CarouselImg = css`
  display: flex;
  transition: transfrom 0.5s ease;
`;

export const LeftBtn = css`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
export const RightBtn = css`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
