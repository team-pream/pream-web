import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const addressWrapper = css`
  width: 90%;
  margin: 0 auto;
  border: 1px solid ${theme.colors.gray200};
  padding: 4%;
  flex-direction: column;
  border-radius: 10px;
`;

export const defaultAddressTag = css`
  /* width: 70px; */
  padding: 2px 6px;
  text-align: center;
  background-color: ${theme.colors.green100};
  color: ${theme.colors.green200};
  border-radius: 3px;
  display: flex;
  margin-bottom: 6px;
`;
export const tagStyle = css`
  display: flexbox;
  width: 45px;
  height: 15px;
  background-color: ${theme.colors.gray100};
  color: #626872;
  border-radius: 3px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
