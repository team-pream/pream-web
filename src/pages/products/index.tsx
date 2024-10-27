import { DropdownUnfold, LikeOff } from '@/assets/icons';
import {
  countText,
  dropdownIcon,
  heartIcon,
  image,
  imageBox,
  infoWrapper,
  item,
  itemList,
  itemPrice,
  itemTitle,
  listWrapper,
  opacityBox,
  productsWrapper,
  span,
  statusWrapper,
  textBox,
  title,
  wrapper,
  dropdownOverlayStyle,
  dropdownMenuStyle,
  menuItemStyle,
} from './index.styles';
import { useState } from 'react';
import { useGetProductsQuery } from '@/queries/products';
import { useLocation } from 'react-router-dom';

interface ProductType {
  categoryId: number;
  id: number;
  description: string;
  name: string;
  images: string[];
  isLiked: boolean;
  price: number;
  sellerId: string;
  status: string;
}

export default function Products() {
  const location = useLocation();
  const { id, name } = location.state || {}; // 전달된 Props 데이터 추출
  const { data } = useGetProductsQuery(id, null);
  const [isOpen, setIsOpen] = useState(false); // 드롭다운 열림/닫힘 상태
  const productList = data?.products;
  const toggleDropdown = () => {
    setIsOpen(!isOpen); // 클릭 시 드롭다운 토글
  };

  const handleItemClick = (item: string) => {
    console.log(item); // 드롭다운 항목 선택 시 처리 -> 필터링 된 상품
    setIsOpen(false); // 선택 후 드롭다운 닫기
  };
  return (
    <div css={wrapper}>
      <h3 css={title}>{name}</h3>
      <div css={productsWrapper}>
        <div css={infoWrapper}>
          <div css={countText}>
            <span css={span}>{data?.totalCount ?? 0}개</span>의 상품
          </div>
          <div css={statusWrapper} onClick={toggleDropdown}>
            <span css={span}>상태</span>
            <DropdownUnfold css={dropdownIcon} />
            {isOpen && ( // 드롭다운이 열렸을 때만 메뉴를 보여줌
              <div>
                <div css={dropdownOverlayStyle(isOpen)} onClick={() => setIsOpen(false)}></div>

                <div css={dropdownMenuStyle(isOpen)}>
                  <div css={menuItemStyle} onClick={() => handleItemClick('AVAILABLE')}>
                    AVAILABLE
                  </div>
                  <div css={menuItemStyle} onClick={() => handleItemClick('SOLD_OUT')}>
                    SOLD_OUT
                  </div>
                  <div css={menuItemStyle} onClick={() => handleItemClick('RESERVED')}>
                    RESERVED
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div css={listWrapper}>
          <div css={itemList}>
            {productList?.map((product: ProductType) => {
              return (
                <div key={product.id} css={item}>
                  <div css={imageBox}>
                    <div css={opacityBox} />
                    <img src={product.images[0]} alt="itemImage" css={image} />
                    <LikeOff css={heartIcon} />
                  </div>
                  <div css={textBox}>
                    <span css={itemTitle}>{product.name}</span>
                    <span css={itemPrice}>{product.price}원</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
