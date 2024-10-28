import { wrapper } from './index.styles';
import { Button } from '@/Components';

export function BGNB() {
  return (
    <nav css={wrapper}>
      <Button size="xl" css={{ margin: '0 18px' }}>
        구매하기
      </Button>
    </nav>
  );
}
