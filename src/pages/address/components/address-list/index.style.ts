import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { addressTag, resultAddress } from '../add-address/index.style';
export const addressListWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  position: relative; /* ::after 의사 요소를 위한 위치 설정 */

  &:last-of-type {
    border-bottom: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 90%; /* 가로 길이 90% */
    border-bottom: 1px solid ${theme.colors.gray200};
  }
`;

export const addressTag2 = css`
  ${addressTag};
  margin: 0;
  margin-right: 10px;
`;

export const defaultAddressTag = css`
  width: 70px;
  padding: 1px 0;
  text-align: center;
  font-size: 12px;
  font-weight: 900;
  background-color: ${theme.colors.green100};
  color: ${theme.colors.green200};
  border-radius: 3px;
  margin-bottom: 6px;
`;

export const resultAddress2 = css`
  ${resultAddress}
  margin: 0px;
`;
