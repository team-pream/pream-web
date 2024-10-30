import { ButtonHTMLAttributes, ReactNode } from 'react';
import { wrapper } from './index.styles';

export type ButtonShape = 'box' | 'capsule';
export type ButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl';
export type ButtonStatus = 'active' | 'pressed' | 'error' | 'disabled';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  shape?: ButtonShape;
  size?: ButtonSize;
  status?: ButtonStatus;
  fullWidth?: boolean;
  children: ReactNode;
}

export function Button({
  shape = 'box',
  size = 'm',
  status = 'active',
  fullWidth = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <button {...props} css={wrapper({ shape, size, status, fullWidth })}>
      {children}
    </button>
  );
}
