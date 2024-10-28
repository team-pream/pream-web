import { AppBarBack, DropdownUnfold } from '@/assets/icons';
import {
  dropdownIcon,
  image,
  imageBox,
  infoWrapper,
  item,
  itemList,
  listWrapper,
  opacityBox,
  productsWrapper,
  statusWrapper,
  textBox,
  wrapper,
  dropdownOverlayStyle,
  dropdownMenuStyle,
  menuItemStyle,
  soldOutOverlayStyle,
} from './index.styles';
import { useState } from 'react';
import { useGetProductsQuery } from '@/queries/products';
import { useLocation, useNavigate } from 'react-router-dom';
import { ProductType } from '@/types';
import { AppBar, GNB, Text } from '@/components';
import theme from '@/styles/theme';

export default function Products() {
  const location = useLocation();
  const { id, name } = location.state || {}; // 전달된 Props 데이터 추출
  const [status, setStatus] = useState<number>();
  const category = id;

  const { data } = useGetProductsQuery({ category, status });
  const [isOpen, setIsOpen] = useState<boolean>(false); // 드롭다운 열림/닫힘 상태
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // 클릭 시 드롭다운 토글
  };

  const handleItemClick = (statusId: number) => {
    setStatus(statusId);
    setIsOpen(false); // 선택 후 드롭다운 닫기
  };
  return (
    <div css={wrapper}>
      <AppBar
        prefix={
          <AppBarBack
            height="24px"
            cursor="pointer"
            onClick={() => {
              navigate('/category');
            }}
          />
        }
      />
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
          <div css={statusWrapper} onClick={toggleDropdown}>
            <Text typo="body2">상태</Text>
            <DropdownUnfold css={dropdownIcon} />
            {isOpen && ( // 드롭다운이 열렸을 때만 메뉴를 보여줌
              <div>
                <div css={dropdownOverlayStyle(isOpen)} onClick={() => setIsOpen(false)}></div>
                <div css={dropdownMenuStyle(isOpen)}>
                  <div css={menuItemStyle} onClick={() => handleItemClick(1)}>
                    <Text typo="subtitle2">구매 가능</Text>
                  </div>
                  <div css={menuItemStyle} onClick={() => handleItemClick(2)}>
                    <Text typo="subtitle2">판매 완료</Text>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div css={listWrapper}>
          <div css={itemList}>
            {data?.products?.map((product: ProductType) => {
              const isSoldOut = product.status === 'SOLD_OUT';
              const price = product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); //천 단위 콤마
              return (
                <div key={product.id} css={item}>
                  <div css={imageBox}>
                    <div css={opacityBox} />
                    <img src={product.images[0]} alt="itemImage" css={image} />
                    {isSoldOut && (
                      <div css={soldOutOverlayStyle}>
                        <Text typo="body1" color={theme.colors.white}>
                          판매완료
                        </Text>
                      </div>
                    )}
                  </div>
                  <div css={textBox}>
                    <Text typo="body2">{product.title}</Text>
                    <Text typo="subtitle1">{price}원</Text>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <GNB />
    </div>
  );
}
