import { css } from '@emotion/react';
import { colors } from '@/styles/colors';

export const contentsWrapper = css`
  padding: 0 18px 18px 18px;
`;

export const title = css`
  color: ${colors.black};
  padding: 11px 0;
`;

export const line = css`
  border-bottom: 2px solid ${colors.black};
`;

export const wrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
  width: 100%;
  margin: 0px auto;
  gap: 30px;
`;

export const iconWrapper = css`
  width: 85px;
  height: 74px;
`;

export const textWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;
