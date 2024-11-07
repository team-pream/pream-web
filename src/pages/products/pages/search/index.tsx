import { AppBarBack, DropdownUnfold } from '@/assets/icons';
import { ActionSheet, AppBar, GNB, Layout, SearchBar, Text } from '@/components';
import theme from '@/styles/theme';
import { useEffect, useState, ChangeEvent, KeyboardEvent } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
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
  soldOutOverlayStyle,
  statusWrapper,
  textBox,
} from './index.styles';
import { useGetProductsSearchQuery } from '@/queries/products';
import { ProductListProduct } from '@/types';
import { Message } from '@/pages/products/components';

export default function Search() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialKeyword = searchParams.get('keyword') || '';
  const initialStatus = searchParams.get('status') ? Number(searchParams.get('status')) : undefined;
  const [keyword, setKeyword] = useState<string>(initialKeyword); // 상태로 관리할 keyword
  const [searchTerm, setSearchTerm] = useState<string>(initialKeyword); // 실제 검색어 상태
  const [status, setStatus] = useState<number | undefined>(initialStatus);
  const [isOpen, setIsOpen] = useState<boolean>(false); // 드롭다운 열림/닫힘 상태
  const { data } = useGetProductsSearchQuery({ keyword: searchTerm, status }, !!searchTerm);

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // 클릭 시 드롭다운 토글
  };

  const handleItemClick = (statusId: number) => {
    setStatus(statusId);
    setIsOpen(false); // 선택 후 드롭다운 닫기
  };

  const handleChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  // Enter 키 이벤트 핸들러
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // 기본 동작 방지
      //공백제거 후 빈값이면 동작안함
      if (keyword.trim() === '') {
        return;
      }
      setSearchTerm(keyword);
      setStatus(undefined);
    }
  };

  const handleSearchIconClick = () => {
    //공백제거 후 빈값이면 동작안함
    if (keyword.trim() === '') {
      return;
    }
    setSearchTerm(keyword);
    setStatus(undefined);
  };

  //현재 키워드, 상태로 URL을 업데이트
  useEffect(() => {
    const params: Record<string, string> = {}; //쿼리파라미터는 문자열만 처리
    if (searchTerm) {
      params.keyword = searchTerm;
    }
    if (status !== undefined) {
      params.status = String(status);
    }
    setSearchParams(params, { replace: true });
  }, [searchTerm, status, setSearchParams]);

  return (
    <Layout>
      <AppBar
        prefix={
          <AppBarBack
            height="24px"
            cursor="pointer"
            onClick={() => {
              navigate(-1);
            }}
          />
        }
        suffix={
          <SearchBar
            value={keyword}
            onChange={handleChangeKeyword}
            onKeyDown={handleKeyDown}
            onClick={handleSearchIconClick}
          />
        }
      />
      <div css={productsWrapper}>
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
        <div css={listWrapper}>
          <div css={itemList}>
            {data?.products.map((product: ProductListProduct) => {
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
          {data?.totalCount == 0 && ( //검색 결과가 없을 때
            <Message message="상품 검색 결과가 없어요" />
          )}
          {!initialKeyword && ( //main 화면에서 search icon 클릭했을 때
            <Message message="검색어를 입력해주세요" />
          )}
        </div>
      </div>
      <GNB />
    </Layout>
  );
}
