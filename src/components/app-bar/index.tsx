import { wrapper } from './index.styles.ts';
import { Logo } from '@/assets/icons';

interface Props {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export function AppBar({ prefix, suffix }: Props) {
  return (
    <header css={wrapper}>
      {prefix ? prefix : <Logo width="94px" height="24px" />}
      {suffix && suffix}
    </header>
  );
}
