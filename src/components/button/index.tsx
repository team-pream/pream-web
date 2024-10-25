import { wrapper } from './index.styles';

export type ButtonVariant = 'box' | 'capsule';
export type ButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl';
export type ButtonStatus = 'active' | 'pressed' | 'disabled';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  status?: ButtonStatus;
  children: React.ReactNode;
}

export default function Button({
  variant = 'box',
  size = 'm',
  status = 'active',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button {...rest} css={wrapper({ variant, size, status })}>
      {children}
    </button>
  );
}
