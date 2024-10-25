import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const searchResultWrapper = css`
  width: 90%;
  margin: 0px auto;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

export const searchTitle = css`
  font-size: 16px;
  font-weight: 600;
`;

export const addressTag = css`
  width: 40px;
  height: 20px;
  background-color: ${theme.colors.gray100};
  color: ${theme.colors.gray300};
  border-radius: 3px;
  font-size: 10px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin: auto 0;
  margin-right: 10px;
`;

export const resultAddress = css`
  width: 90%;
  margin: 0 auto;
  margin: 10px 0;
  cursor: pointer;
  display: flex;
  :hover {
    color: ${theme.colors.green200};
  }
`;
