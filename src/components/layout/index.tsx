import { CSSProperties, ReactNode } from 'react';
import { main, wrapper } from './index.styles';
interface LayoutProps {
  style?: CSSProperties;
  children: ReactNode;
}

export function Layout({ style, children }: LayoutProps) {
  return (
    <div css={wrapper}>
      <main css={main} style={style}>
        {children}
      </main>
    </div>
  );
}
