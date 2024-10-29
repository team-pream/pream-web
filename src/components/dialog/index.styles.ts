import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { SecondaryActionType } from '.';

export const wrapper = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 298px;
  padding: 38px 18px 18px 18px;
  display: flex;
  gap: 29px;
  flex-direction: column;
  border-radius: 10px;
  background: ${theme.colors.white};
  z-index: ${theme.zIndex.dialog};
`;

export const text = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 17px;
`;

export const buttonWrapper = css`
  width: 100%;
  display: flex;
  gap: 8px;
`;

export const secondaryButton = ({
  secondaryActionType,
}: {
  secondaryActionType: SecondaryActionType;
}) => css`
  ${secondaryActionType === 'neutral' &&
  css`
    color: ${theme.colors.white};
    background: ${theme.colors.gray200};
    &:hover {
      background: ${theme.colors.gray300};
    }
  `}
`;
