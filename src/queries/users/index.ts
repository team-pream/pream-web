import { QUERY_KEYS } from '@/queries/query-keys';
import { useQuery } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import {
  deleteUsersPet,
  getUsersMe,
  patchUsersOnboarding,
  patchUsersPet,
  postUserPet,
  postUsersCheckNickname,
  patchUsersAddress,
  patchUsersMe,
  postUsersPet,
  patchUsersAddress,
  patchUsersMe,
} from '@/api';
import {
  GetUsersMeResponse,
  PatchAuthOnboardingBody,
  PatchUsersMeBody,
  PatchUsersPetBody,
  PostUserPetBody,
  PostUsersCheckNicknameBody,
  PostUsersPetBody,
  PatchUsersAddressBody,
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
export const useUserPetMutation = (onSuccess: () => void) => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_PETS_PROFILE,
    mutationFn: async (body: PostUserPetBody) => {
      try {
        return await postUserPet(body);
      } catch {
        throw new Error('반려동물 정보를 등록하는 데 실패했습니다.');
      }
    },
    onSuccess,
  });
};

export const useGetUsersMeQuery = (enabled: boolean) => {
  return useQuery<GetUsersMeResponse, Error>({
    queryKey: QUERY_KEYS.GET_USERS_ME,
    queryFn: async () => {
      try {
        return await getUsersMe();
      } catch {
        throw new Error('유저 정보를 가져오는 데 실패했습니다.');
      }
    },
    enabled,
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

export const usePatchUsersAddressMutation = (onSuccess?: () => void) => {
  return useMutation({
    mutationKey: QUERY_KEYS.PATCH_USERS_ADDRESS,
    mutationFn: async (body: PatchUsersAddressBody) => {
      try {
        return await patchUsersAddress(body);
      } catch {
        throw new Error('주소등록에 실패했습니다.');
      }
    },
    onSuccess,
  });
};

export const usePatchUsersMeMutation = (onSuccess: () => void) => {
  return useMutation({
    mutationKey: QUERY_KEYS.PATCH_USERS_ME,
    mutationFn: async (body: PatchUsersMeBody) => {
      try {
        return await patchUsersMe(body);
      } catch {
        throw new Error('사용자 프로필을 수정하는 데 실패했습니다.');
      }
    },
    onSuccess,
  });
};

export const usePatchUsersPetMutation = (onSuccess: () => void) => {
  return useMutation({
    mutationKey: QUERY_KEYS.PATCH_USERS_PET,
    mutationFn: async (body: PatchUsersPetBody) => {
      try {
        return await patchUsersPet(body);
      } catch {
        throw new Error('사용자 프로필을 수정하는 데 실패했습니다.');
      }
    },
    onSuccess,
  });
};

export const useDeleteUsersPetMutation = (onSuccess: () => void) => {
  return useMutation({
    mutationKey: QUERY_KEYS.DELETE_USERS_PET,
    mutationFn: async () => {
      try {
        return await deleteUsersPet();
      } catch {
        throw new Error('사용자 프로필을 수정하는 데 실패했습니다.');
      }
    },
    onSuccess,
  });
};

export const usePostUsersPetMutation = (onSuccess: () => void) => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_USERS_PET,
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
