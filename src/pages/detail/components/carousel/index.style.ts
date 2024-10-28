import { css } from '@emotion/react';

export const CarouselWrapper = css`
  position: relative;
  max-width: 480px;
  margin: 58px auto 0;
  box-sizing: border-box;
`;

export const CarouselImg = css`
  display: flex;
  transition: transform 0.5s ease; // 수정
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
