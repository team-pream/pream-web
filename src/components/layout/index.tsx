import { ReactNode } from 'react';
import { main, wrapper } from './index.styles';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div css={wrapper}>
      <main css={main}>{children}</main>
    </div>
  );
}
