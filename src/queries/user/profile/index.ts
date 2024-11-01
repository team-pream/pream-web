import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/queries/query-keys';
import { getProfile } from '@/api/user/profile';

export const useGetProfile = (accessToken: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_PROFILE,
    queryFn: async () => {
      if (!accessToken) {
        throw new Error('Access token is missing');
      }
      try {
        return await getProfile(accessToken);
      } catch {
        throw new Error('유저 프로필 정보를 가져오는 데 실패했습니다.');
      }
    },
    enabled: !!accessToken, // accessToken이 빈 문자열이 아닐 때만 쿼리 실행
  });
};
