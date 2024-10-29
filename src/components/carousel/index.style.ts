import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const CarouselWrapper = css`
  position: relative;
  margin: 58px auto 0;
  overflow: hidden;
  box-sizing: border-box;
`;

export const CarouselImg = css`
  display: flex;
  transition: transform 0.5s ease;
`;

export const LeftBtn = css`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.3);
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
  background: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const ProgressBarWrapper = css`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 238px;
  height: 2px;
  background-color: ${theme.colors.grayOpacity200};
`;

export const ProgressBar = css`
  position: absolute;
  height: 100%;
  background-color: ${theme.colors.black};
  transition: left 0.5s ease;
`;
