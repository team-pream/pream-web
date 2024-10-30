import { patchUserOnboarding } from '@/api/user/userProfile';
import { useMutation } from '@tanstack/react-query';
import { PatchUserOnboardingBody } from '@/types';

export const usePatchUserOnboardingMutation = (onSuccessCallback: () => void) => {
  return useMutation({
    mutationFn: async (data: { body: PatchUserOnboardingBody; accessToken: string }) => {
      const { body, accessToken } = data;
      return await patchUserOnboarding(body, accessToken);
    },
    onSuccess: onSuccessCallback,
    onError: () => {
      throw new Error('온보딩 정보를 보내는 데 실패했습니다.');
    },
  });
};
