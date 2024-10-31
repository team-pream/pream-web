import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/queries/query-keys';
import { getUserName } from '@/api/user/user-name';

export const useGetUserNameQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_USERNAME,
    queryFn: async () => {
      try {
        return await getUserName();
      } catch {
        throw new Error('유저 정보를 가져오는 데 실패했습니다.');
      }
    },
  });
};
