import { categoryList, categoryItems, categoryItem } from './index.styles';
import Skeleton from 'react-loading-skeleton';

export default function CategoryItemSkeleton() {
  return (
    <section css={categoryList}>
      <div css={categoryItems}>
        {Array(9)
          .fill(null)
          .map((_, index) => (
            <div key={index} css={categoryItem}>
              <Skeleton width={58} height={58} />
              <Skeleton width={40} height={10} />
            </div>
          ))}
      </div>
    </section>
  );
}
