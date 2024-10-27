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
  soldOutOverlayStyle,
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
  const [statusId, setStatusId] = useState<number | null>(null);
  const { data } = useGetProductsQuery(id, statusId);
  const [isOpen, setIsOpen] = useState(false); // 드롭다운 열림/닫힘 상태
  const productList = data?.products;

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // 클릭 시 드롭다운 토글
  };

  const handleItemClick = (id: number) => {
    setStatusId(id);
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
                  <div css={menuItemStyle} onClick={() => handleItemClick(1)}>
                    구매 가능
                  </div>
                  <div css={menuItemStyle} onClick={() => handleItemClick(2)}>
                    판매 완료
                  </div>
                  <div css={menuItemStyle} onClick={() => handleItemClick(3)}>
                    예약 완료
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div css={listWrapper}>
          <div css={itemList}>
            {productList?.map((product: ProductType) => {
              const isSoldOut = product.status === 'SOLD_OUT';
              return (
                <div key={product.id} css={item}>
                  <div css={imageBox}>
                    <div css={opacityBox} />
                    <img src={product.images[0]} alt="itemImage" css={image} />
                    <LikeOff css={heartIcon} />
                    {isSoldOut && (
                      <div css={soldOutOverlayStyle}>
                        <span>판매완료</span>
                      </div>
                    )}
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
