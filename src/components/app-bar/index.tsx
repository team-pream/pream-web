import { ReactNode } from 'react';
import { Logo } from '@/assets/icons';
import { wrapper } from './index.styles';

interface Props {
  prefix?: ReactNode;
  suffix?: ReactNode;
}

export function AppBar({ prefix, suffix }: Props) {
  return (
    <header css={wrapper}>
      {prefix ? prefix : <Logo width="94px" height="24px" />}
      {suffix && suffix}
    </header>
  );
}
