import { api } from '../api';
import { PostPaymentsCancelBody, PostPaymentsTossBody } from '@/types/payments';

export const postPaymentsToss = async ({ body }: { body: PostPaymentsTossBody }) => {
  const response = await api.post(`/payments/toss`, body);
  return response.data;
};

export const postPaymentsCancel = async ({
  orderId,
  body,
}: {
  orderId: string;
  body: PostPaymentsCancelBody;
}) => {
  const response = await api.post(`/payments/${orderId}/cancel`, body);
  return response.data;
};
