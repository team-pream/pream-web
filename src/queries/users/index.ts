import { QUERY_KEYS } from '@/queries/query-keys';
import { useQuery } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { getUsersMe, patchUsersOnboarding, postUsersCheckNickname, postUsersPet } from '@/api';
import {
  GetUsersMeResponse,
  PatchAuthOnboardingBody,
  PostUsersCheckNicknameBody,
  PostUsersPetBody,
} from '@/types';

export const usePostUsersCheckNicknameMutation = (onSuccess: () => void) => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_USERS_CHECK_NICKNAME,
    mutationFn: async (body: PostUsersCheckNicknameBody) => {
      try {
        return await postUsersCheckNickname(body);
      } catch {
        throw new Error('중복 확인 실패');
      }
    },
    onSuccess: onSuccess,
  });
};

// TODO: User와 Pet 분리
export const useUsersPetMutation = (onSuccess: () => void) => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_PETS_PROFILE,
    mutationFn: async (body: PostUsersPetBody) => {
      try {
        return await postUsersPet(body);
      } catch {
        throw new Error('반려동물 정보를 등록하는 데 실패했습니다.');
      }
    },
    onSuccess,
  });
};

export const useGetUsersMeQuery = () => {
  return useQuery<GetUsersMeResponse, Error>({
    queryKey: QUERY_KEYS.GET_USERS_ME,
    queryFn: async () => {
      try {
        return await getUsersMe();
      } catch {
        throw new Error('유저 정보를 가져오는 데 실패했습니다.');
      }
    },
  });
};

export const usePatchUsersOnboardingMutation = (onSuccess: () => void) => {
  return useMutation({
    mutationKey: QUERY_KEYS.PATCH_AUTH_ONBOARDING,
    mutationFn: async (body: PatchAuthOnboardingBody) => {
      try {
        return await patchUsersOnboarding(body);
      } catch {
        throw new Error('기본 정보 등록에 실패했습니다.');
      }
    },
    onSuccess,
  });
};