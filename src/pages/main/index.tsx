import {
  categoryList,
  categoryItems,
  categoryItem,
  categoryIcon,
  listWrapper,
} from './index.styles';
import { useNavigate } from 'react-router-dom';
import { useGetCategoriesQuery } from '@/queries/category';
import { Logo, Search } from '@/assets/icons';
import { AppBar, GNB, Layout, Text } from '@/components';
import Carousel from '@/components/carousel';
import ProductList from './components/product-list';
import { useGetCurationQuery } from '@/queries/curation';

interface CategoryData {
  id: number;
  name: string;
  icon: string;
}

const CAT_WHEEL = 4;
const WALKING = 5;
const EXCLUDED_CATEGORIES = [CAT_WHEEL, WALKING];

export default function Main() {
  const navigate = useNavigate();
  const { data: category } = useGetCategoriesQuery();
  const { data: curation } = useGetCurationQuery();

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
    'images/carouselImage.png',
    'images/carouselImage.png',
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
          width={390}
          height={270}
          showButtons={true}
          autoPlay={true}
          autoPlayInterval={5000}
        />
        <section css={categoryList}>
          <div css={categoryItems}>
            {category
              ?.filter((item: CategoryData) => !EXCLUDED_CATEGORIES.includes(item.id))
              .map((item: CategoryData) => (
                <div
                  key={item.id}
                  css={categoryItem}
                  onClick={
                    item.id !== 1
                      ? () =>
                          navigate(`/products?category=${item.id}`, {
                            state: { id: item.id, name: item.name },
                          })
                      : () => navigate('/category')
                  }
                >
                  <img src={item.icon} alt={item.name} css={categoryIcon} />
                  <Text typo="body3">{item.name}</Text>
                </div>
              ))}
          </div>
        </section>
        <section css={listWrapper}>
          {listArray.map((list) => (
            <ProductList key={list.title} products={list.data} title={list.title} />
          ))}
        </section>
      </main>
      <GNB />
    </Layout>
  );
}
