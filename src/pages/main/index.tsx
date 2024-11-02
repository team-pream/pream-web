import {
  categoryList,
  categoryItems,
  categoryItem,
  categoryIcon,
  listWrapper,
} from './index.styles';
import { useNavigate } from 'react-router-dom';
import { useGetCategoriesQuery } from '@/queries/categories';
import { useGetProductsCurationQuery } from '@/queries/products';
import { Logo, Search } from '@/assets/icons';
import { AppBar, GNB, Layout, Text, Carousel } from '@/components';
import ProductList from './components/product-list';
import { Category } from '@/types';
import theme from '@/styles/theme';

const CAT_WHEEL = 4;
const WALKING = 5;
const EXCLUDED_CATEGORIES = [CAT_WHEEL, WALKING];

export default function Main() {
  const navigate = useNavigate();
  const { data: categories } = useGetCategoriesQuery();
  const { data: curation } = useGetProductsCurationQuery();

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
      <AppBar
        prefix={<Logo width="94" height="20" />}
        suffix={
          <Search
            width="19"
            height="20"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/search')}
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
        <section css={categoryList}>
          <div css={categoryItems}>
            {categories
              ?.filter((category: Category) => !EXCLUDED_CATEGORIES.includes(category.id))
              .map((category: Category) => (
                <div
                  key={category.id}
                  css={categoryItem}
                  onClick={
                    category.id !== 1
                      ? () =>
                          navigate(`/products?category=${category.id}`, {
                            state: { id: category.id, name: category.name },
                          })
                      : () => navigate('/category')
                  }
                >
                  <img src={category.icon} alt={category.name} css={categoryIcon} />
                  <Text typo="body3">{category.name}</Text>
                </div>
              ))}
          </div>
        </section>
        <section css={listWrapper}>
          {listArray.map((list) => (
            <ProductList key={list.title} products={list.data ?? []} title={list.title} />
          ))}
        </section>
      </main>
      <GNB />
    </Layout>
  );
}
