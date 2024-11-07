import { AppBarBack } from '@/assets/icons';
import {
  imageBox,
  infoWrapper,
  item,
  itemList,
  listWrapper,
  productsWrapper,
  textBox,
} from './index.styles';
import { AppBar, GNB, Layout, Text } from '@/components';
import { useGetProductsQuery } from '@/queries/products';
import { useLocation } from 'react-router-dom';
import { ProductListProduct } from '@/types';
import theme from '@/styles/theme';
import Skeleton from 'react-loading-skeleton';

export default function Products() {
  const location = useLocation();
  const { id, name } = location.state || {}; // 전달된 Props 데이터 추출
  const category = id;

  const { data } = useGetProductsQuery({ category });

  return (
    <Layout>
      <AppBar prefix={<AppBarBack height="24px" cursor="pointer" />} />
      <div css={productsWrapper}>
        <Text typo="title1" color={theme.colors.black}>
          {name}
        </Text>
        <div css={infoWrapper}>
          <Text typo="body2" color={theme.colors.gray300}>
            <Text typo="body2" color={theme.colors.black}>
              {data?.totalCount ?? 0}개
            </Text>
            의 상품
          </Text>
        </div>
        <div css={listWrapper}>
          <div css={itemList}>
            {data?.products?.map((product: ProductListProduct) => (
              <div key={product.id} css={item}>
                <div css={imageBox}>
                  <Skeleton />
                </div>
                <div css={textBox}>
                  <Skeleton />
                  <Skeleton />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <GNB />
    </Layout>
  );
}
