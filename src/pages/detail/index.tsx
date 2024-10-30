import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '@/queries/detail/index';
import { SheetList } from './components/bottom-sheet/index.style';
import BottomSheet from './components/bottom-sheet';
import ProductInfo from './components/product-infomation';
import { AppBar } from '@/components';
import { AppBarBack } from '@/assets/icons';
import { BGNB } from './components/gnb-buy';
import Carousel from '@/components/carousel';
import { Layout } from '@/components';
const Detail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();

  // productId를 숫자 타입으로 변환
  const parsedProductId = productId ? parseInt(productId, 10) : undefined;

  // 항상 컴포넌트 최상단에서 모든 Hook 호출
  const { data: product, error, isLoading } = useGetProductQuery(parsedProductId || 0);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleOptionClick = () => setIsSheetOpen(true);
  const handleCloseSheet = () => setIsSheetOpen(false);

  // 잘못된 ID일 경우 조건부 렌더링
  if (!parsedProductId) {
    return <div>잘못된 상품 ID입니다.</div>;
  }

  // 로딩 중이거나 에러 발생 시 조건부 렌더링
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching product: {error.message}</div>;
  if (!product) return <div>No product found</div>;

  // 정상적인 렌더링
  return (
    <Layout>
      <AppBar prefix={<AppBarBack height="17px" cursor="pointer" />} />
      <Carousel images={product.images} showButtons={true} autoPlay={false} />
      <ProductInfo onOptionClick={handleOptionClick} product={product} />
      <BGNB />
      <BottomSheet isOpen={isSheetOpen} onClose={handleCloseSheet}>
        <div css={SheetList}>수정하기</div>
        <div css={SheetList}>삭제하기</div>
      </BottomSheet>
    </Layout>
  );
};

export default Detail;
