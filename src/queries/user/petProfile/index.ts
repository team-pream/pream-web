import { postUserPet } from '@/api/user/petProfile';
import { useMutation } from '@tanstack/react-query';
import { PostUserPetBody } from '@/types';

export const usePostPetProfileMutation = (onSuccessCallback: () => void) => {
  return useMutation({
    mutationFn: async (data: { body: PostUserPetBody; accessToken: string }) => {
      const { body, accessToken } = data;
      return await postUserPet(body, accessToken);
    },
    onSuccess: onSuccessCallback,
    onError: () => {
      throw new Error('반려동물 정보를 보내는 데 실패했습니다.');
    },
  });
};
