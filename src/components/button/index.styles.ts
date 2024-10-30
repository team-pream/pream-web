import { css } from '@emotion/react';
import theme from '@/styles/theme';
import { ButtonSize, ButtonStatus, ButtonVariant } from '@/components/button';

interface WrapperProps {
  size: ButtonSize;
  variant: ButtonVariant;
  status: ButtonStatus;
  fullWidth: boolean;
}

export const wrapper = ({ size, variant, status, fullWidth }: WrapperProps) => css`
  display: flex;
  align-items: center;
  justify-content: center;

  ${variant === 'box' && box({ size, fullWidth })};
  ${variant === 'capsule' && capsule};

  ${status === 'active' && active};
  ${status === 'pressed' && pressed};
  ${status === 'disabled' && disabled};
  ${status === 'error' && error};

  transition: background 0.5s ease;
`;

export const box = ({ size, fullWidth }: { size: ButtonSize; fullWidth: boolean }) => css`
  ${size === 'xl' &&
  css`
    width: 100%;
    padding: 16px 25px;
    border-radius: 10px;
    ${theme.typo.subtitle2};
  `}
  ${size === 'l' &&
  css`
    width: ${fullWidth ? '100%' : '354px'};
    padding: 16px 25px;
    border-radius: 10px;
    ${theme.typo.subtitle2};
  `}
  ${size === 'm' &&
  css`
    width: ${fullWidth ? '100%' : '307px'};
    padding: 16px 25px;
    border-radius: 10px;
    ${theme.typo.subtitle2};
  `}
  ${size === 's' &&
  css`
    width: ${fullWidth ? '100%' : '100px'};
    padding: 13px 22px;
    border-radius: 8px;
    ${theme.typo.body4};
  `}
  ${size === 'xs' &&
  css`
    width: ${fullWidth ? '100%' : '60px'};
    padding: 10px 0;
    border-radius: 6px;
    ${theme.typo.body6};
  `}
`;

export const capsule = css`
  padding: 9px 9px;
  border-radius: 17px;
`;

export const active = css`
  color: ${theme.colors.white};
  background: ${theme.colors.green200};

  &:hover {
    background: ${theme.colors.green300};
  }
`;

export const pressed = css`
  color: ${theme.colors.white};
  background: ${theme.colors.green300};
`;

export const disabled = css`
  color: ${theme.colors.gray300};
  background: ${theme.colors.gray200};
  cursor: default;
`;

export const error = css`
  color: ${theme.colors.red300};
  background: ${theme.colors.red100};
  border: 1px solid ${theme.colors.red300};

  &:hover {
    background: ${theme.colors.red200};
  }
`;
