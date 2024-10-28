// hooks/useGetProductQuery.ts
import { useQuery } from '@tanstack/react-query';
import { getProduct, Product } from '@/api/detail';
import { QUERY_KEYS } from '../query-keys';

export const useGetProductQuery = (productId: string) => {
  return useQuery<Product, Error>({
    queryKey: QUERY_KEYS.GET_PRODUCT(productId),
    queryFn: async () => {
      if (!productId) throw new Error('상품 ID가 제공되지 않았습니다.');
      return await getProduct(productId);
    },
  });
};
