import { Text } from '@/components';
import { itemList, item, imageBox, textBox, itemTitle } from '../../index.styles';
import { ProductsCurationProduct } from '@/types';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface Props {
  title: string;
  products: ProductsCurationProduct[];
}

export default function ProductListSkeleton({ products, title }: Props) {
  return (
    <>
      <Text typo="subtitle1">{title}</Text>
      <div css={itemList}>
        {products?.map((product) => (
          <div key={product.id} css={item}>
            <div css={imageBox}>
              <Skeleton width={120} height={120} borderRadius={13} />
            </div>
            <div css={textBox}>
              <Text typo="body2" css={itemTitle}>
                <Skeleton width={105} borderRadius={4} />
              </Text>
              <Text typo="subtitle1">
                <Skeleton width={80} />
              </Text>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
