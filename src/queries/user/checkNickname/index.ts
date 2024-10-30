import { postCheckNickname } from '@/api/user/checkNickname';
import { useMutation } from '@tanstack/react-query';
import { CheckNicknameRequestBody } from '@/types';

export const usePostCheckNicknameMutation = (onSuccessCallback: () => void) => {
  return useMutation({
    mutationFn: async (data: { body: CheckNicknameRequestBody; accessToken: string }) => {
      const { body, accessToken } = data;
      return await postCheckNickname(body, accessToken);
    },
    onSuccess: onSuccessCallback,
    onError: () => {
      throw new Error('중복 확인 실패');
    },
  });
};
