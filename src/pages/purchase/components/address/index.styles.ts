import { colors } from '@/styles/colors';
import { css } from '@emotion/react';

export const addressWrapper = css`
  width: 100%;
  margin: 18px auto 34px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AddAddressInput = css`
  display: flex; /* Flexbox를 사용하여 Input과 버튼을 나란히 배치 */
  gap: 10px; /* Input과 버튼 사이의 간격 */
  align-items: center; /* 세로 정렬 */
`;

export const addressBtn = css`
  background-color: ${colors.green200};
  font-size: 12px;
  color: white;
  display: flex;
  box-sizing: border-box;
  width: 100px;
  height: 30px;
  padding: 10px;
  justify-content: center;
  align-content: center;
  text-align: center;
  margin-top: 27px;
  border-radius: 3px;
  cursor: pointer;
`;
