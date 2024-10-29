import { css } from '@emotion/react';
import { typography } from '@/styles/typography';
import { colors } from '@/styles/colors';
import { Contents } from '../detail/index.styles';

export const contentsWrapper = css`
  ${Contents};
  width: 90%;
  /* height: 100%; */
  margin: 71px auto 0px;
  padding-bottom: 0;
`;
export const title = css`
  font-size: ${typography.title1.fontSize};
  font-weight: ${typography.title1.fontWeight};
  color: ${colors.black};
  padding: 11px 10px;
`;

export const line = css`
  border-bottom: 2px solid ${colors.black};
`;
