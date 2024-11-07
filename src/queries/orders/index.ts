import { useMutation, useQuery } from '@tanstack/react-query';
import { getOrders, postOrdersConfirm, postOrdersProduct } from '@/api';
import { GetOrdersListResponse, PostOdersProductBody } from '@/types';
import { QUERY_KEYS } from '../query-keys';

export const usePostOrdersProductMutation = (productId: number) => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_ORDERS_PRODUCT(productId),
    mutationFn: async (body: PostOdersProductBody) => {
      return await postOrdersProduct({ productId, body });
    },
  });
};

export const useGetOrdersQuery = () => {
  return useQuery<GetOrdersListResponse, Error>({
    queryKey: QUERY_KEYS.GET_ORDERS,
    queryFn: async () => {
      try {
        return await getOrders();
      } catch {
        throw new Error('주문 내역을 불러오는 데 실패했습니다.');
      }
    },
  });
};

export const usePostOrdersConfirmMutation = (orderId: string) => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_ORDERS_CONFIRM(orderId),
    mutationFn: async () => {
      return await postOrdersConfirm({ orderId });
    },
  });
};
