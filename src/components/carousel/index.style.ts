import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const carouselWrapper = css`
  position: relative;
  margin: 0 auto;
  overflow: hidden;
`;

export const carouselImg = css`
  display: flex;
  transition: transform 0.5s ease;
`;

export const leftButton = css`
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

export const rightButton = css`
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

export const progressBarWrapper = css`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 238px;
  height: 2px;
  background-color: ${theme.colors.grayOpacity200};
`;

export const progressBar = css`
  position: absolute;
  height: 100%;
  background-color: ${theme.colors.black};
  transition: left 0.5s ease;
`;
