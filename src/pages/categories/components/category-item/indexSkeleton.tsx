import { categoryItems, categoryItem, imageSkeleton } from './index.styles';
import Skeleton from 'react-loading-skeleton';

export default function CategoryItemSkeleton() {
  return (
    <div css={categoryItems}>
      {Array(9)
        .fill(null)
        .map((_, index) => (
          <div key={index} css={categoryItem}>
            <Skeleton width={58} height={58} css={imageSkeleton} />
            <Skeleton width={40} height={10} />
          </div>
        ))}
    </div>
  );
}
