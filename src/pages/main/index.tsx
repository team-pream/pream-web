import { listWrapper } from './index.styles';
import { useNavigate } from 'react-router-dom';
import { useGetCategoriesQuery } from '@/queries/categories';
import { useGetProductsCurationQuery } from '@/queries/products';
import { FabPlus, Logo, Search } from '@/assets/icons';
import { AppBar, GNB, Layout, Carousel, FAB } from '@/components';
import theme from '@/styles/theme';

import ProductList from './components/product-list';
import ProductListSkeleton from './components/product-list/indexSkeleton';
import CategoryList from './components/category-list';
import CategoryListSkeleton from './components/category-list/indexSkeleton';

const CAT_WHEEL = 4;
const WALKING = 5;
const EXCLUDED_CATEGORIES = [CAT_WHEEL, WALKING];

export default function Main() {
  const navigate = useNavigate();
  const { data: categories, isLoading: isLoadingCategoryList } = useGetCategoriesQuery();
  const { data: curation, isLoading: isLoadingProductList } = useGetProductsCurationQuery();

  // 섹션
  const listArray = [
    { title: '새로 등록된 상품', data: curation?.new },
    { title: '이 상품은 어때요?', data: curation?.random },
    { title: '판매가 1만원 이하 베스트', data: curation?.cheap },
    { title: '실시간 인기 상품', data: curation?.popular },
  ];

  // 배너 이미지
  const imageList = [
    'images/carouselImage.png',
    'images/carouselImage2.png',
    'images/carouselImage3.png',
  ];

  return (
    <Layout>
      <FAB icon={<FabPlus width="20" height="20" />} onClick={() => navigate('/products/upload')} />
      <AppBar
        prefix={<Logo width="94" height="20" />}
        suffix={
          <Search
            width="19"
            height="20"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/products/search')}
          />
        }
      />
      <main>
        <Carousel
          images={imageList}
          fullWidth={true}
          height={270}
          autoPlay={true}
          autoPlayInterval={5000}
          showButtons={false}
          progressBarColor={theme.colors.white}
        />
        {isLoadingCategoryList ? (
          <CategoryListSkeleton />
        ) : (
          <CategoryList categories={categories} excludedCategories={EXCLUDED_CATEGORIES} />
        )}

        <section css={listWrapper}>
          {listArray.map((list) =>
            isLoadingProductList ? (
              <ProductListSkeleton
                key={list.title}
                products={Array(5).fill({})}
                title={list.title}
              />
            ) : (
              <ProductList key={list.title} products={list.data ?? []} title={list.title} />
            )
          )}
        </section>
      </main>
      <GNB />
    </Layout>
  );
}
