import React, { useState } from 'react';
import { useGetProductQuery } from '@/queries/detail/index.ts';
import { Wrapper, Contents, Header } from './index.styles';
import { SheetList } from './components/bottom-sheet/index.style.ts';
import BottomSheet from './components/bottom-sheet/index.tsx';
import ProductInfo from './components/product-infomation/index.tsx';
//import { GNB } from '@/Components/index.ts';
// import { useParams } from 'react-router-dom';
import Carousel from './components/carousel/index.tsx';
import SvgAppbarBack from '@/assets/icons/AppbarBack.tsx';
import { BGNB } from './components/gnb-buy/index.tsx';

const Detail: React.FC = () => {
  //const { id } = '5'; //useParams<{ id: string }>(); // URL에서 상품 ID 가져오기
  const { data: product, error, isLoading } = useGetProductQuery('5'); // 상품 정보 쿼리
  console.log(product?.description);

  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleOptionClick = () => setIsSheetOpen(true);
  const handleCloseSheet = () => setIsSheetOpen(false);

  if (isLoading) return <div>Loading...</div>; // 로딩 중
  if (error) return <div>Error fetching product: {error.message}</div>; // 에러 처리

  if (!product) {
    return <div>No product found</div>; // 상품이 없는 경우 처리
  }

  return (
    <div css={Wrapper}>
      <div css={Header}>
        <SvgAppbarBack css={{ width: '7px', height: '14px', cursor: 'pointer' }} />
      </div>
      <div css={Contents}>
        <Carousel images={product.images} /> {/* 상품 이미지 전달 */}
        <ProductInfo
          onOptionClick={handleOptionClick} // 클릭 이벤트 핸들러
          product={product} // 상품 정보 전달
        />
      </div>
      <BGNB />
      <BottomSheet isOpen={isSheetOpen} onClose={handleCloseSheet}>
        <div css={SheetList}>수정하기</div>
        <div css={SheetList}>삭제하기</div>
      </BottomSheet>
    </div>
  );
};

export default Detail;
