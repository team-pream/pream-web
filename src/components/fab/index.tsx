import { wrapper } from './index.styles';

export type FABSize = 's' | 'm';

export interface FABProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: FABSize;
  icon: React.ReactNode;
}

export function FAB({ size = 's', icon, ...rest }: FABProps) {
  return (
    <button css={wrapper({ size })} {...rest}>
      {icon}
    </button>
  );
}
