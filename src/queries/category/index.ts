import { getCategories } from '@/api/category';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query-keys';

export const useGetCategoriesQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_CATEGORIES(),
    queryFn: async () => {
      try {
        return await getCategories();
      } catch {
        throw new Error('카테고리 정보를 가져오는 데 실패했습니다.');
      }
    },
  });
};
