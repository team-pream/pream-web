import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDeleteProductsDetailMutation, useGetProductsDetailQuery } from '@/queries/products';
import { ActionSheet, AppBar, Button, Dim, Layout, Dialog, Carousel } from '@/components';
import { AppBarBack } from '@/assets/icons';
import { colors } from '@/styles/colors';
import { carouselWrapper, statusText, ctaButtonWrapper, wrapper } from './index.style';
import ProductInfo from './components/product-info';

export default function Detail() {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);

  const ACTION_SHEET_MENUS = [
    { label: '수정하기', onClick: () => navigate(`/products/${productId}/edit`) },
    {
      label: '삭제하기',
      onClick: () => {
        setIsDeleteDialogOpen(true);
        setIsSheetOpen(false);
      },
    },
  ];

  // productId를 숫자 타입으로 변환
  const parsedProductId = parseInt(productId!, 10);

  // 항상 컴포넌트 최상단에서 모든 Hook 호출
  const { data: product, error, isFetching, isSuccess } = useGetProductsDetailQuery(productId!);
  const { mutate: deleteProductsDetail } = useDeleteProductsDetailMutation();

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
        {isDeleteDialogOpen && (
          <Dialog
            type="error"
            title="상품을 삭제하시겠어요?"
            description="삭제한 상품은 복구할 수 없어요"
            primaryActionLabel="삭제할게요"
            secondaryActionLabel="취소"
            onPrimaryAction={() => {
              if (productId) deleteProductsDetail(productId);
              setIsDeleteDialogOpen(false);
              navigate('/products');
            }}
            onSecondaryAction={() => setIsDeleteDialogOpen(false)}
          />
        )}
      </>
    );
  }

  return null;
}
