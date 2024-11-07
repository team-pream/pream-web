import { css } from '@emotion/react';
import { colors } from '@/styles/colors';
import theme from '@/styles/theme';

export const wrapper = css`
  height: fit-content;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 24px 0 0 0;
`;

export const titleWrapper = css`
  display: flex;
  flex-direction: column;
  padding: 0px 18px;
  gap: 11px;
`;

export const titleTop = css`
  display: flex;
  justify-content: space-between;
`;

export const infoWrapper = css`
  width: 100%;
  padding: 0 18px;
  margin: 13px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const infoContentWrapper = css`
  display: flex;
  gap: 20px;
`;

export const infoContent = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const infoRow = css`
  display: flex;
`;

export const infoTitle = css`
  margin-right: 20px;
  width: 46px;
`;

export const timeInfo = css`
  margin: 20px 0px;
`;

export const border = css`
  width: 100%;
  height: 4px;
  margin: 0 0 20px 0;
  background: ${theme.colors.gray100};
`;

export const description = css`
  font-size: 12px;
  font-weight: 400;
  white-space: pre-line;
`;

export const reservedTag = css`
  background-color: ${colors.yellow100};
  border-radius: 5px;
  margin-right: 10px;
  padding: 0 12px;
`;
