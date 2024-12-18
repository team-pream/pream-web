import { ButtonHTMLAttributes, ReactNode } from 'react';
import { wrapper, button } from './index.styles';

export type FABSize = 's' | 'm';

export interface FABProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: FABSize;
  icon: ReactNode;
}

export function FAB({ size = 's', icon, ...props }: FABProps) {
  return (
    <div css={wrapper}>
      <button css={button({ size })} {...props}>
        {icon}
      </button>
    </div>
  );
}
