import { useQuery } from '@tanstack/react-query';
import { getProduct, Product } from '@/api/detail';
import { QUERY_KEYS } from '../query-keys';

export const useGetProductQuery = (productId: number) => {
  return useQuery<Product, Error>({
    queryKey: QUERY_KEYS.GET_PRODUCT(productId),
    queryFn: () => getProduct(productId),
    enabled: !!productId, // productId가 유효할 때만 실행
    staleTime: 0, // 항상 최신 데이터 사용
    refetchOnWindowFocus: false, // 창 활성화 시 재요청 방지
  });
};
