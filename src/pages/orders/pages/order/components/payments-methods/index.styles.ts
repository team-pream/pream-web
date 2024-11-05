import { colors } from '@/styles/colors';
import { css } from '@emotion/react';

export const paymentsWrapper = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 18px auto 18px;
`;

export const plusSaleText = css`
  display: flex;
  flex-direction: column;
  color: ${colors.gray300};
  margin-bottom: 36px;
  gap: 10px;
`;

export const otherPaymentsWrapper = css`
  margin: 7px auto;
`;
