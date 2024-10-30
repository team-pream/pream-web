import { typography } from '@/styles/typography';
import { HTMLAttributes, ReactNode } from 'react';

type Typo = keyof typeof typography;

interface Props extends HTMLAttributes<HTMLSpanElement> {
  color?: string;
  typo: Typo;
  children: ReactNode;
}

export function Text({ color, typo, children, ...props }: Props) {
  return (
    <span style={{ color }} css={{ ...typography[typo] }} {...props}>
      {children}
    </span>
  );
}
