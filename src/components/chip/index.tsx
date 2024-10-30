import { ButtonHTMLAttributes, ReactNode } from 'react';
import { wrapper } from './index.styles';

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Chip({ children, ...props }: ChipProps) {
  return (
    <button {...props} css={wrapper}>
      {children}
    </button>
  );
}
