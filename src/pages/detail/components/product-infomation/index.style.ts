import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const productInfoWrapper = css`
  width: 100%;
  height: calc(100vh - ${theme.size.gnbHeight} - ${theme.size.appBarHeight});
`;

export const titleWrapper = css`
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`;

export const titleTop = css`
  display: flex;
  height: 20px;
  margin-bottom: 5px;
`;

export const title = css`
  font-size: 16px;
  font-weight: 500;
  flex: 1;
`;

export const optionIcon = css`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const titleBottom = css`
  font-size: 24px;
  font-weight: 600;
`;

export const infoWrapper = css`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  font-size: 12px;
`;

export const infoTitle = css`
  color: #aeaeae;
  margin-right: 20px;
  width: 46px;
`;

export const infoValue = css``;

export const timeInfo = css`
  color: ${theme.colors.gray200};
  margin: 20px 0px;
`;
