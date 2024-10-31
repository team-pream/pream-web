import { wrapper } from './index.styles';
import { Button } from '@/components';

interface BGNBProps {
  onClick?: () => void;
}

export function BGNB({ onClick }: BGNBProps) {
  return (
    <nav css={wrapper}>
      <Button size="xl" css={{ margin: '0 18px' }} onClick={onClick}>
        구매하기
      </Button>
    </nav>
  );
}
