import { ReactNode } from 'react';
import { Text } from '@/components';
import { content, info, nowrap, wrap } from './index.styles';

interface Props {
  isWrapped?: boolean;
  title: string;
  children: ReactNode;
}

export default function Info({ isWrapped = true, title, children }: Props) {
  return (
    <section css={isWrapped ? wrap : nowrap}>
      <div css={info}>
        <Text typo="subtitle1">{title}</Text>
        <div css={content}>{children}</div>
      </div>
    </section>
  );
}
