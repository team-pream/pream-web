import { ReactNode } from 'react';
import { Text } from '@/components';
import { content, info } from './index.styles';

interface Props {
  title: string;
  children: ReactNode;
}

export default function Info({ title, children }: Props) {
  return (
    <section css={info}>
      <Text typo="subtitle1">{title}</Text>
      <div css={content}>{children}</div>
    </section>
  );
}
