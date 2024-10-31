// src/queries/user/petProfile/index.ts
import { postUserPet } from '@/api/user/pet-profile';
import { useMutation } from '@tanstack/react-query';
import { PostUserPetBody } from '@/types';

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
