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
  soldOutOverlayStyle,
} from './index.styles';
import { useEffect, useState } from 'react';
import { ActionSheet, AppBar, GNB, Layout, Text } from '@/components';
import { useGetProductsQuery } from '@/queries/products';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { ProductListProduct } from '@/types';
import theme from '@/styles/theme';
import Message from '../../components/message';

export default function Products() {
  const location = useLocation();
  const { id: category, name } = location.state || {}; // 전달된 Props 데이터 추출
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || category;
  const initialStatus = searchParams.get('status') ? Number(searchParams.get('status')) : undefined;

  const [status, setStatus] = useState<number | undefined>(initialStatus);
  const [categoryName] = useState<string>(name);

  const { data } = useGetProductsQuery({ category: initialCategory, status });
  const [isOpen, setIsOpen] = useState<boolean>(false); // 드롭다운 열림/닫힘 상태
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // 클릭 시 드롭다운 토글
  };

  const handleItemClick = (statusId: number) => {
    setStatus(statusId);
    setSearchParams(
      { category: initialCategory, status: String(statusId), 'category-name': categoryName },
      { replace: true }
    );
    setIsOpen(false); // 선택 후 드롭다운 닫기
  };

  useEffect(() => {
    setSearchParams(
      (prevParams) => {
        const params = new URLSearchParams(prevParams);
        if (initialCategory) {
          params.set('category', initialCategory);
        }
        if (status !== undefined) {
          params.set('status', String(status));
        }
        if (categoryName) {
          params.set('category-name', categoryName);
        }
        return params;
      },
      { replace: true }
    );
  }, [status, initialCategory, categoryName, setSearchParams]);

  return (
    <Layout>
      <AppBar prefix={<AppBarBack height="24px" cursor="pointer" onClick={() => navigate(-1)} />} />
      <div css={productsWrapper}>
        <Text typo="title1" color={theme.colors.black}>
          {searchParams.get('category-name')}
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
            {isOpen && (
              <ActionSheet
                onClose={() => setIsOpen(false)}
                menus={[
                  { label: '구매 가능', onClick: () => handleItemClick(1) },
                  { label: '판매 완료', onClick: () => handleItemClick(2) },
                  { label: '예약 중', onClick: () => handleItemClick(3) },
                ]}
              />
            )}
          </div>
        </div>
        {data?.totalCount == 0 && <Message message="상품 목록이 없어요" />}
        <div css={listWrapper}>
          <div css={itemList}>
            {data?.products?.map((product: ProductListProduct) => {
              const isSoldOut = product.status === 'SOLD_OUT';
              const isReserved = product.status === 'RESERVED';
              const price = product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); //천 단위 콤마
              return (
                <div
                  key={product.id}
                  css={item}
                  onClick={() => navigate(`/products/${product.id}`)}
                >
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
                    {isReserved && (
                      <div css={soldOutOverlayStyle}>
                        <Text typo="body1" color={theme.colors.white}>
                          예약 중
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
    </Layout>
  );
}
