import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const mainWrapper = css`
  padding: 0 18px;
`;

export const mainTitleBox = css`
  width: 100%;
  padding: 20px 0;
  border-bottom: 2px solid;
`;

export const item = css`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: space-between;
  padding: 18px 0;
  border-bottom: 1px solid ${theme.colors.gray100};
`;

export const content = css`
  display: flex;
  gap: 20px;
  width: 100%;
  cursor: pointer;
`;

export const opacityBox = (props: string) => css`
  display: flex;
  border-radius: 13px;
  width: 90px;
  height: 90px;
  position: absolute;
  z-index: 1;
  background-color: ${props === 'AVAILABLE'
    ? theme.colors.grayOpacity100
    : theme.colors.grayOpacity300};
  justify-content: center;
  align-items: center;
`;

export const image = css`
  width: 90px;
  height: 90px;
  background-color: gray;
  border-radius: 13px;
`;

export const textContainer = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 23px;
  overflow: hidden;
`;

export const topBox = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 6px;
`;

export const bottomBox = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const salesStatus = css`
  font-size: 14px;
  font-weight: 600;
  color: ${theme.colors.green200};
`;

export const contentTitle = css`
  width: 100%;

  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  overflow: hidden;
`;
