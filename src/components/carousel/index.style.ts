import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const wrapper = ({ maxWidth }: { maxWidth: string }) => css`
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  max-width: ${maxWidth};
`;

export const carouselImage = ({ width, transform }: { width: number; transform: string }) => css`
  display: flex;
  width: ${width}px;
  transform: ${transform};
  transition: transform 0.5s ease;
`;

export const image = ({ width, height }: { width: number; height: number }) => css`
  width: ${width}px;
  height: ${height}px;
  border-radius: 0 0 20px 20px;
  object-fit: cover;
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

export const progressBar = (color: string, width: number, left: number) => css`
  position: absolute;
  height: 100%;
  background-color: ${color};
  transition: left 0.5s ease;
  width: ${width}px;
  left: ${left}px;
`;
