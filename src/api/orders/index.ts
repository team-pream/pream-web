import { GetOrdersListResponse, PostOdersProductBody } from '@/types';
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

export const getOrders = async () => {
  const response = await api.get<GetOrdersListResponse>('/orders');
  return response.data;
};

export const postOrdersConfirm = async ({ orderId }: { orderId: string }) => {
  const response = await api.post(`/orders/${orderId}`);
  return response.data;
};
