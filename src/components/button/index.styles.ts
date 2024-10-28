import { css } from '@emotion/react';
import theme from '@/styles/theme';
import { ButtonSize } from '.';

interface WrapperProps {
  size: ButtonSize;
  variant: 'box' | 'capsule';
  status: 'active' | 'pressed' | 'disabled';
}

export const wrapper = ({ size, variant, status }: WrapperProps) => css`
  display: flex;
  align-items: center;
  justify-content: center;

  ${variant === 'box' && box({ size })};
  ${variant === 'capsule' && capsule};

  ${status === 'active' && active};
  ${status === 'pressed' && pressed};
  ${status === 'disabled' && disabled};

  transition: background 0.3s ease;
`;

export const box = ({ size }: { size: ButtonSize }) => css`
  ${size === 'xl' &&
  css`
    width: 100%;
    padding: 16px 25px;
    border-radius: 10px;
  `}
  ${size === 'l' &&
  css`
    width: 354px;
    padding: 16px 25px;
    border-radius: 10px;
  `}
  ${size === 'm' &&
  css`
    width: 307px;
    padding: 16px 25px;
    border-radius: 10px;
  `}
  ${size === 's' &&
  css`
    width: 100px;
    padding: 13px 22px;
    border-radius: 8px;
  `}
  ${size === 'xs' &&
  css`
    width: 60px;
    padding: 10px 0;
    border-radius: 6px;
  `}
`;

export const capsule = css`
  padding: 9px 9px;
  border-radius: 17px;
`;

export const active = css`
  color: ${theme.colors.white};
  background: ${theme.colors.green200};
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
