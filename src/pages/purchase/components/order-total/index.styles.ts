import { colors } from '@/styles/colors';
import { typography } from '@/styles/typography';
import { css } from '@emotion/react';

export const totalOrderWrapper = css`
  width: 100%;
  margin: 18px auto;
`;

export const totalTextWrapper = css`
  display: flex;
  flex-direction: column;
  margin: 10px auto 30px;
`;

export const totalTextStyle = css`
  color: ${colors.gray300};
  font-size: ${typography.body1.fontSize};
  font-weight: ${typography.body1.fontWeight};
  display: flex;
  justify-content: space-between;
  margin-bottom: 11px;
`;
