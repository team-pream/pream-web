import { postUserCheckNickname } from '@/api/user/check-nickname';
import { useMutation } from '@tanstack/react-query';
import { PostCheckNicknameBody } from '@/types';

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
