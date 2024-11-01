import { wrapper } from './index.styles';
import { Button } from '@/components';

export function BGNB() {
  return (
    <nav css={wrapper}>
      <Button size="xl">구매하기</Button>
    </nav>
  );
}
