import { categoryList, categoryItems, categoryItem } from '../../index.styles';
import Skeleton from 'react-loading-skeleton';

export default function CategoryListSkeleton() {
  return (
    <section css={categoryList}>
      <div css={categoryItems}>
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <div key={index} css={categoryItem}>
              <Skeleton width={46} height={46} />
              <Skeleton width={46} />
            </div>
          ))}
      </div>
    </section>
  );
}
