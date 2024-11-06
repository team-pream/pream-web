import { colors } from '@/styles/colors';
import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const containTagWrapper = css`
  display: flex;
  margin-bottom: 5px;
  align-items: center;
`;

export const addressFormWrapper = css`
  width: 100%;
  margin: 0 auto;
  height: calc(100vh - ${theme.size.appBarHeight} - ${theme.size.gnbHeight});
  position: relative;
`;

export const defaultWrapper = css`
  width: 90%;
  margin: 0 auto;
`;

export const buttonWrapper = css`
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  padding: 16px 0;
`;

export const formTagStyle = css`
  background-color: ${colors.gray100};
  padding: 4px 7px;
  display: flex;
  width: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  color: #626872;
  margin-right: 6px;
`;
export const inputDetailWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
