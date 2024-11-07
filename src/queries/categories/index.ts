import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/queries/query-keys';
import { GetCategoriesResponse } from '@/types';
import { getCategories } from '@/api';

export const useGetCategoriesQuery = () => {
  return useQuery<GetCategoriesResponse, Error>({
    queryKey: QUERY_KEYS.GET_CATEGORIES,
    queryFn: async () => {
      try {
        return await getCategories();
      } catch {
        throw new Error('카테고리 정보를 가져오는 데 실패했습니다.');
      }
    },
  });
};
