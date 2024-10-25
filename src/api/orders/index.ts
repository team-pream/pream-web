import { PostOdersProductBody } from '@/types';
import { api } from '../api';

export const postOrdersProduct = async ({
  productId,
  body,
}: {
  productId: number;
  body: PostOdersProductBody;
}) => {
  const response = await api.post(`/orders/${productId}`, body);
  return response.data;
};