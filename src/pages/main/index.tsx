import { wrapper } from './index.styles';
import {
  categoryList,
  categoryItems,
  categoryItem,
  categoryIcon,
  listWrapper,
  itemList,
  item,
  itemTitle,
  itemPrice,
  imageBox,
  sampleImage,
  opacityBox,
  heartIcon,
  listTitle,
  textBox,
} from './index.styles';
import { useNavigate } from 'react-router-dom';
import { useGetCategoriesQuery } from '@/queries/category';
import Image from '/images/sampleImage.png';
import { LikeOff } from '@/assets/icons';

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
  const { data } = useGetCategoriesQuery();
  const listArray = [
    '새로 등록된 상품',
    '이 상품은 어때요?',
    '판매가 1만원 이하 베스트',
    '실시간 인기 상품',
  ];

  // 상품 더미 데이터
  const items = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
  }));

  return (
    <div css={wrapper}>
      <header>header</header>
      <main>
        <div>carousel</div>
        <div css={categoryList}>
          <div css={categoryItems}>
            {data
              ?.filter((item: CategoryData) => !EXCLUDED_CATEGORIES.includes(item.id))
              .map((item: CategoryData) => (
                <div key={item.id} css={categoryItem}>
                  <img
                    src={item.icon}
                    alt={item.name}
                    css={categoryIcon}
                    onClick={() => navigate(item.id)}
                  />
                  <span>{item.name}</span>
                </div>
              ))}
          </div>
        </div>
        <div css={listWrapper}>
          {listArray.map((listTitleText, index) => (
            <>
              <span key={index} css={listTitle}>
                {listTitleText}
              </span>
              <div css={itemList}>
                {items.map((product) => (
                  <div key={product.id} css={item}>
                    <div css={imageBox}>
                      <div css={opacityBox} />
                      <img src={Image} alt="itemImage" css={sampleImage} />
                      <LikeOff css={heartIcon} />
                    </div>
                    <div css={textBox}>
                      <span css={itemTitle}>와그웨어 강아지 신발</span>
                      <span css={itemPrice}>15,000원</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      </main>
      <nav>nav</nav>
    </div>
  );
}
