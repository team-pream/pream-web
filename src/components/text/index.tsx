import { typography } from '@/styles/typography.ts';

type Typo = keyof typeof typography;

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  color?: string;
  typo: Typo;
  children: React.ReactNode;
}

export function Text({ color, typo, children, ...rest }: Props) {
  return (
    <span style={{ color, ...typography[typo] }} {...rest}>
      {children}
    </span>
  );
}
