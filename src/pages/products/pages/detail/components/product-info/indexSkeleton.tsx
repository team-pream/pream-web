import {
  titleWrapper,
  titleTop,
  infoWrapper,
  infoContentWrapper,
  infoContent,
  timeInfo,
  wrapper,
  border,
} from './index.style';
import { ProductsDetailOption } from '@/assets/icons';
import Skeleton from 'react-loading-skeleton';

export default function ProductInfoSkeleton() {
  return (
    <div css={wrapper}>
      <section css={titleWrapper}>
        <div css={titleTop}>
          <Skeleton width={300} />
          <ProductsDetailOption width="16px" height="16px" cursor="pointer" />
        </div>
        <Skeleton width={140} height={20} /> {/* 가격 출력 */}
      </section>

      <section css={infoWrapper}>
        <div css={infoContentWrapper}>
          <div css={infoContent}>
            <Skeleton width={40} height={14} /> {/* 판매자 */}
            <Skeleton width={40} height={14} /> {/* 상태 */}
            <Skeleton width={40} height={14} /> {/* 연락처 */}
          </div>
          <div css={infoContent}>
            <Skeleton width={80} height={14} /> {/* 판매자 */}
            <Skeleton width={80} height={14} /> {/* 상태 */}
            <Skeleton width={80} height={14} /> {/* 연락처*/}
          </div>
        </div>
        <div css={timeInfo}>
          <Skeleton width={40} />
        </div>
      </section>

      <div css={border} />

      <div css={titleWrapper}>
        <Skeleton width={80} height={20} />
      </div>
    </div>
  );
}
