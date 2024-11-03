import { css } from '@emotion/react';
import theme from '@/styles/theme';
import { colors } from '@/styles/colors';
export const addressListWrapper = css`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - ${theme.size.appBarHeight} - ${theme.size.gnbHeight});
`;

export const addressWrapper = css`
  width: 90%;
  margin: 0 auto;
  border: 1px solid ${colors.gray200};
  padding: 4%;
  flex-direction: column;
  border-radius: 10px;
`;

export const defaultAddressTag = css`
  /* width: 70px; */
  padding: 2px 6px;
  text-align: center;
  background-color: ${colors.green100};
  color: ${theme.colors.green200};
  border-radius: 3px;
  display: flex;
  margin-bottom: 6px;
`;
export const tagStyle = css`
  display: flexbox;
  width: 45px;
  height: 15px;
  background-color: ${colors.gray100};
  color: #626872;
  border-radius: 3px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
export const modifyButtonStyle = css`
  cursor: pointer;
  display: flex;
  color: ${colors.green200};
  :hover {
    color: ${colors.green300};
  }
`;
