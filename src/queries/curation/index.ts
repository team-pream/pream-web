import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query-keys';
import { getCuration } from '@/api/products';

export const useGetCurationQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_CURATION,
    queryFn: async () => {
      try {
        return await getCuration();
      } catch {
        throw new Error('상품 목록을 가져오는 데 실패했습니다.');
      }
    },
  });
};
