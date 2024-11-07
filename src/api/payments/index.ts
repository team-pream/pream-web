import { api } from '../api';
import { PostPaymentsTossBody } from '@/types/payments';

export const postPaymentsToss = async ({ body }: { body: PostPaymentsTossBody }) => {
  const response = await api.post(`/payments/toss`, body);
  return response.data;
};
