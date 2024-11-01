import { colors } from '@/styles/colors';
import { css } from '@emotion/react';

export const buttonWrapper = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px 9px;
`;
export const miniButton = css`
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.gray200};
  padding: 15px;
  color: ${colors.gray300};
  cursor: pointer;

  &:hover {
    border: 1px solid ${colors.black100};
    color: ${colors.black100};
  }
`;
export const activeButton = css`
  ${miniButton};
  border: 1px solid ${colors.black100};
  color: ${colors.black};
`;

export const inactiveButton = css`
  ${miniButton};
  border: 1px solid ${colors.gray200};
  color: ${colors.gray300};
`;
