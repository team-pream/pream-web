import { useMutation } from '@tanstack/react-query';
import { postUserCheckNickname } from '@/api/user';
import { PostCheckNicknameBody } from '@/types/user';
import { postUserPet } from '@/api/user';
import { PostUserPetBody } from '@/types/user';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/queries/query-keys';
import { getUserName } from '@/api/user';
import { patchUserOnboarding } from '@/api/user';
import { PatchUserOnboardingBody } from '@/types/user';

export const usePostCheckNicknameMutation = (onSuccessCallback: () => void) => {
  return useMutation({
    mutationFn: async (data: { body: PostCheckNicknameBody }) => {
      const { body } = data;
      return await postUserCheckNickname(body);
    },
    onSuccess: onSuccessCallback,
    onError: () => {
      throw new Error('중복 확인 실패');
    },
  });
};

export const usePostPetProfileMutation = (onSuccessCallback: () => void) => {
  return useMutation({
    mutationFn: async (body: PostUserPetBody) => {
      return await postUserPet(body);
    },
    onSuccess: onSuccessCallback,
    onError: () => {
      throw new Error('반려동물 정보를 보내는 데 실패했습니다.');
    },
  });
};

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

export const usePatchUserOnboardingMutation = (onSuccessCallback: () => void) => {
  return useMutation({
    mutationFn: async (body: PatchUserOnboardingBody) => {
      return await patchUserOnboarding(body);
    },
    onSuccess: onSuccessCallback,
    onError: () => {
      throw new Error('온보딩 정보를 보내는 데 실패했습니다.');
    },
  });
};
