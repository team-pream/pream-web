import { ReactNode } from 'react';
import { wrapper } from './index.styles';
import { Logo } from '@/assets/icons';

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