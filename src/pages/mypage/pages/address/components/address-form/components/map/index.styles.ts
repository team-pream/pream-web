import { css } from '@emotion/react';

export const buttonWrapper = css`
  position: relative;
  width: 100%;
  height: 200px;
  margin: 10px 0 15px;
`;

export const currentLocationButton = css`
  position: absolute;
  right: 10px;
  bottom: 10px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  z-index: 10;
  font-size: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const innerWrapper = css`
  width: 100%;
  height: 100%;
`;
