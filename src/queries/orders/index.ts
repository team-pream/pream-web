import { useMutation } from '@tanstack/react-query';
import { postOrdersProduct } from '@/api/orders';
import { PostOdersProductBody } from '@/types/orders';
import { QUERY_KEYS } from '../query-keys';

export const usePostOrdersProductMutation = (productId: number) => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_ORDERS_PRODUCT(productId),
    mutationFn: async (body: PostOdersProductBody) => {
      return await postOrdersProduct({ productId, body });
    },
  });
};
