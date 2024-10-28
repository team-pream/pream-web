import { ButtonHTMLAttributes, ReactNode } from 'react';
import { wrapper } from './index.styles';

export type FABSize = 's' | 'm';

export interface FABProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: FABSize;
  icon: ReactNode;
}

export function FAB({ size = 's', icon, ...rest }: FABProps) {
  return (
    <button css={wrapper({ size })} {...rest}>
      {icon}
    </button>
  );
}
