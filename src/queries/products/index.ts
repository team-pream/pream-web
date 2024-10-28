import { getProducts } from '@/api/products';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query-keys';
import { ParamType } from '@/types';

export const useGetProductsQuery = (params: ParamType) => {
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
