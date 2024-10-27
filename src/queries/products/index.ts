import { getProducts } from '@/api/products';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query-keys';

export const useGetProductsQuery = (categoryId: number, statusId: number | null) => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_PRODUCTS(categoryId, statusId),
    queryFn: async () => {
      try {
        return await getProducts(categoryId, statusId);
      } catch {
        throw new Error('상품 정보를 가져오는 데 실패했습니다.');
      }
    },
  });
};
