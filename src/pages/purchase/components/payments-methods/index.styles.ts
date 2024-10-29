import { colors } from '@/styles/colors';
import { typography } from '@/styles/typography';
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
  font-size: ${typography.body1.fontSize};
  font-weight: ${typography.body1.fontWeight};
  gap: 10px;
  margin-bottom: 36px;
`;

export const buttonstyle = css`
  display: flex;
  border: 1px solid ${colors.black100};
  height: 48px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  font-size: ${typography.subtitle2.fontSize};
  font-weight: ${typography.subtitle2.fontWeight};
  color: ${colors.black};
  margin-top: 17px;
`;

export const otherPaymentsWrapper = css`
  margin: 7px auto 0px;
`;
