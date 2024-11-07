import { useNavigate, useSearchParams } from 'react-router-dom';
import { Complete } from '@/assets/icons';
import { AppBar, Button, Layout, Text } from '@/components';
import {
  blockTitle,
  completeIcon,
  confirmWrapper,
  hr,
  info,
  infoContent,
  infoTitle,
  InnerWrapper,
  orderInfoWrapper,
  payInfo,
  paymentBlock,
  productImg,
  productInfoWrapper,
  shipBlock,
  textWrapperStyle,
  wrapper,
} from './index.styles';
import { ROUTE_PATHS } from '@/constants/routes';
import { useEffect, useState } from 'react';
import { usePostPaymentsTossMutation } from '@/queries';
import { PostPaymentsTossResponse } from '@/types';
import { formatPhoneNumber } from '@/utils/format';
import { PAYMENT_METHODS } from '@/constants/payments';

export default function OrderComplete() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [order, setOrder] = useState<PostPaymentsTossResponse>();

  const { mutateAsync: postPaymentsToss } = usePostPaymentsTossMutation();

  useEffect(() => {
    async function fetchProductData() {
      const paymentKey = searchParams.get('paymentKey');
      const orderId = searchParams.get('orderId');
      const amount = searchParams.get('amount');

      if (paymentKey && orderId && amount) {
        const response: PostPaymentsTossResponse = await postPaymentsToss({
          paymentKey,
          orderId,
          amount: parseInt(amount),
        });
        setOrder(response);
      }
    }

    fetchProductData();
  }, [postPaymentsToss, searchParams]);

  if (!order) return <div>Loading</div>;

  return (
    <Layout>
      <AppBar />
      <div css={wrapper}>
        <div css={confirmWrapper}>
          <Complete css={completeIcon} />
          <Text typo="title1">구매 완료!</Text>
          <Button
            shape="box"
            size="s"
            onClick={() => navigate(ROUTE_PATHS.MAIN, { replace: true })}
          >
            메인으로
          </Button>
        </div>
        <hr css={hr} />
        <div css={orderInfoWrapper}>
          <div css={productInfoWrapper}>
            <Text typo="subtitle1">주문 상품 정보</Text>
            <div css={InnerWrapper}>
              <div css={productImg}>
                <img src={order.product.images?.[0]} alt="상품사진" />
              </div>
              <div css={textWrapperStyle}>
                <Text typo="body4">{order.product.title}</Text>
                <Text typo="subtitle1">{`${order.paymentAmount.toLocaleString()}원`}</Text>
              </div>
            </div>
          </div>
          <div css={shipBlock}>
            <Text typo="subtitle1" css={blockTitle}>
              배송 정보
            </Text>
            <div css={info}>
              <div css={infoTitle}>
                <Text typo="subtitle2">받는 분</Text>
                <Text typo="subtitle2">주소</Text>
                <Text typo="subtitle2">휴대폰번호</Text>
              </div>
              <div css={infoContent}>
                <Text typo="body4">{order.receiverName}</Text>
                <Text typo="body4">
                  {order.shippingAddress.roadAddress} {order.shippingAddress.detailAddress}
                </Text>
                <Text typo="body4">{formatPhoneNumber(order.phone) ?? ''}</Text>
              </div>
            </div>
          </div>
          <div css={paymentBlock}>
            <Text typo="subtitle1" css={blockTitle}>
              결제 정보
            </Text>
            <div css={payInfo}>
              <div css={infoTitle}>
                <Text typo="subtitle2">결제 방법</Text>
                <Text typo="subtitle2">결제 금액</Text>
              </div>
              <div css={infoContent}>
                <Text typo="body4">
                  {order.detailPaymentMethod ??
                    PAYMENT_METHODS[order.paymentMethod as keyof typeof PAYMENT_METHODS]}
                </Text>
                <Text typo="body4">{`${order.paymentAmount.toLocaleString()}원`}</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
