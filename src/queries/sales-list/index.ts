import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query-keys';
import { getProductsSalesList } from '@/api/products';

export const useGetProductsSalesListQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_SALES_LIST,
    queryFn: async () => {
      try {
        return await getProductsSalesList();
      } catch {
        throw new Error('판매 내역 정보를 가져오는데 실패했습니다.');
      }
    },
  });
};
