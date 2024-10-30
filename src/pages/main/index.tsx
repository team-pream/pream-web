import {
  wrapper,
  categoryList,
  categoryItems,
  categoryItem,
  categoryIcon,
  listWrapper,
  itemList,
  item,
  imageBox,
  sampleImage,
  opacityBox,
  textBox,
  itemTitle,
} from './index.styles';
import { useNavigate } from 'react-router-dom';
import { useGetCategoriesQuery } from '@/queries/category';
import { useGetCurationQuery } from '@/queries/curation';
import { Logo, Search } from '@/assets/icons';
import { AppBar, GNB, Text } from '@/components';
import Carousel from '@/components/carousel';

interface CategoryData {
  id: number;
  name: string;
  icon: string;
}

interface CurationData {
  id: number;
  title: string;
  price: number;
  status: string;
  images: [];
  categoryId: number;
}

const CAT_WHEEL = 4;
const WALKING = 5;
const EXCLUDED_CATEGORIES = [CAT_WHEEL, WALKING];

export default function Main() {
  const navigate = useNavigate();
  const { data: category } = useGetCategoriesQuery();
  const { data: curation } = useGetCurationQuery();

  // 섹션 제목
  const listArray = [
    '새로 등록된 상품',
    '이 상품은 어때요?',
    '판매가 1만원 이하 베스트',
    '실시간 인기 상품',
  ];

  // 배너 이미지
  const imageList = [
    'images/carouselImage.png',
    'images/carouselImage.png',
    'images/carouselImage.png',
  ];

  const curationKeys = ['new', 'random', 'cheap', 'popular'];

  return (
    <div css={wrapper}>
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
                  onClick={() => navigate(`/products?category=${item.id}&status=${1}`)}
                >
                  <img src={item.icon} alt={item.name} css={categoryIcon} />
                  <Text typo="body3">{item.name}</Text>
                </div>
              ))}
          </div>
        </section>
        <section css={listWrapper}>
          {listArray.map((listTitleText, index) => (
            <div key={index}>
              <Text typo="subtitle1">{listTitleText}</Text>
              <div css={itemList}>
                {curation?.[curationKeys[index]]?.map((curationItem: CurationData) => (
                  <div key={curationItem.id} css={item}>
                    <div css={imageBox}>
                      <div css={opacityBox} />
                      <img src={curationItem.images[0]} alt="itemImage" css={sampleImage} />
                    </div>
                    <div css={textBox} onClick={() => navigate(`/products/:${curationItem.id}`)}>
                      <Text typo="body2" css={itemTitle}>
                        {curationItem.title}
                      </Text>
                      <Text typo="subtitle1">{curationItem.price.toLocaleString()}원</Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
      <GNB />
    </div>
  );
}
