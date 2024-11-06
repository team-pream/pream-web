import { useEffect, useMemo, useState } from 'react';
import { GetProductsDetailResponse, GetUsersMeResponse, PAYMENT_METHODS_TYPE } from '@/types';
import { loadTossPayments, TossPaymentsPayment } from '@tosspayments/tosspayments-sdk';
import { PAYMENT_METHODS } from '@/pages/orders/types';

// TODO 변경
const order = {
  id: 'wegis446mdsojp',
};

interface Props {
  user: GetUsersMeResponse;
  product: GetProductsDetailResponse;
  //   order: any;
}

const CLIENT_KEY = import.meta.env.VITE_TOSS_CLIENT_KEY;

const usePayment = ({ user, product }: Props) => {
  const [payment, setPayment] = useState<TossPaymentsPayment>();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PAYMENT_METHODS_TYPE | null>(
    null
  );

  const customerKey = user?.id;

  useEffect(() => {
    async function fetchPayment() {
      if (!customerKey || !CLIENT_KEY) return;

      try {
        const tossPayments = await loadTossPayments(CLIENT_KEY);
        const payment = tossPayments.payment({
          customerKey,
        });

        setPayment(payment);
      } catch (error) {
        console.error('Error fetching payment:', error);
      }
    }

    fetchPayment();
  }, [customerKey]);

  const basicPaymentRequest = useMemo(
    () => ({
      amount: {
        currency: 'KRW',
        value: product.price,
      },
      orderId: order.id,
      orderName: product.title,
      successUrl: window.location.origin + '/order/complete',
      failUrl: window.location.origin + '/order/failure',
      customerEmail: user.id,
      customerName: user.username,
      customerMobilePhone: '01000000000',
    }),
    [product, user]
  );

  const requestPayment = async ({
    product,
    user,
  }: {
    orderId: string;
    product: GetProductsDetailResponse;
    user: GetUsersMeResponse;
  }) => {
    if (!payment || !selectedPaymentMethod || !product || !user) return;

    switch (selectedPaymentMethod) {
      case PAYMENT_METHODS.CARD:
        await payment.requestPayment({
          ...basicPaymentRequest,
          method: 'CARD',
          card: {
            useEscrow: false,
            flowMode: 'DEFAULT',
            useCardPoint: false,
            useAppCardOnly: false,
          },
        });
        break;
      case PAYMENT_METHODS.TRANSFER:
        await payment.requestPayment({
          ...basicPaymentRequest,
          method: 'TRANSFER',
          transfer: {
            cashReceipt: {
              type: '소득공제',
            },
            useEscrow: false,
          },
        });
        break;
      case PAYMENT_METHODS.VIRTUAL_ACCOUNT:
        await payment.requestPayment({
          ...basicPaymentRequest,
          method: 'VIRTUAL_ACCOUNT',
          virtualAccount: {
            cashReceipt: {
              type: '소득공제',
            },
            useEscrow: false,
            validHours: 24,
          },
        });
        break;
      case PAYMENT_METHODS.MOBILE_PHONE:
        await payment.requestPayment({
          ...basicPaymentRequest,
          method: 'MOBILE_PHONE',
        });
        break;
      case PAYMENT_METHODS.CULTURE_GIFT_CERTIFICATE:
        await payment.requestPayment({
          ...basicPaymentRequest,
          method: 'CULTURE_GIFT_CERTIFICATE',
        });
        break;
      case PAYMENT_METHODS.FOREIGN_EASY_PAY:
        await payment.requestPayment({
          ...basicPaymentRequest,
          method: 'FOREIGN_EASY_PAY', // 해외 간편결제
          foreignEasyPay: {
            provider: 'PAYPAL', // PayPal 결제
            country: 'KR',
          },
        });
        break;
    }
  };

  return { requestPayment, selectedPaymentMethod, setSelectedPaymentMethod };
};

export default usePayment;
