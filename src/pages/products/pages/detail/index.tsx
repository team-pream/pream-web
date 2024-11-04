import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductQuery } from '@/queries/products';
import { ActionSheet, AppBar, Button, Dim, Layout, Dialog, Carousel } from '@/components';
import { AppBarBack } from '@/assets/icons';
import { colors } from '@/styles/colors';
import { carouselWrapper, statusText, ctaButtonWrapper, wrapper } from './index.style';
import ProductInfo from './components/product-info';

const ACTION_SHEET_MENUS = [
  { label: '수정하기', onClick: () => {} },
  { label: '삭제하기', onClick: () => {} },
];

export default function Detail() {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();

  // productId를 숫자 타입으로 변환
  const parsedProductId = parseInt(productId!, 10);

  // useGetProductQuery에 productId를 전달
  const { data: product, error, isFetching, isSuccess } = useGetProductQuery(productId!);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleOptionClick = () => setIsSheetOpen(true);
  const handleCloseSheet = () => setIsSheetOpen(false);
  const handlePurchaseClick = () => {
    if (product) {
      navigate(`/orders/${productId}`, { state: { product } });
    }
  };

  // 잘못된 ID일 경우 조건부 렌더링
  if (!parsedProductId) {
    return <div>잘못된 상품 ID입니다.</div>;
  }

  if (error)
    return (
      <Dialog
        type="error"
        title="ERROR"
        description={error.message}
        primaryActionLabel="메인으로 돌아가기"
      />
    );

  if (!product && !isFetching)
    return (
      <Dialog
        type="error"
        title="ERROR"
        description="상품을 찾을 수 없습니다"
        primaryActionLabel="메인으로 돌아가기"
      />
    );

  if (isSuccess && product) {
    return (
      <>
        <Layout>
          <AppBar
            prefix={<AppBarBack height="24px" cursor="pointer" onClick={() => navigate(-1)} />}
          />

          <section css={wrapper}>
            <div css={carouselWrapper}>
              <Carousel
                fullWidth={true}
                height={332}
                images={product.images}
                showButtons={true}
                autoPlay={false}
                progressBarColor={colors.white}
              />
              {product.status !== 'AVAILABLE' && (
                <>
                  <Dim />
                  <div css={statusText}>{product.status}</div> {/* 상태 텍스트 */}
                </>
              )}
            </div>

            <ProductInfo onOptionClick={handleOptionClick} product={product} />

            <div css={ctaButtonWrapper}>
              <Button size="xl" onClick={handlePurchaseClick}>
                구매하기
              </Button>
            </div>
          </section>
        </Layout>

        {isSheetOpen && <ActionSheet menus={ACTION_SHEET_MENUS} onClose={handleCloseSheet} />}
      </>
    );
  }

  return null;
}
