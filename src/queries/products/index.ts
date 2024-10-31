import { getProducts } from '@/api/products';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query-keys';
import { GetProductsParamType } from '@/types/product';

export const useGetProductsQuery = (params: GetProductsParamType) => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_PRODUCTS(params),
    queryFn: async () => {
      try {
        return await getProducts(params);
      } catch {
        throw new Error('상품 정보를 가져오는 데 실패했습니다.');
      }
    },
  });
};
