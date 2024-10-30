import { patchOnboarding } from '@/api/user/userProfile';
import { useMutation } from '@tanstack/react-query';
import { OnboardingRequestBody } from '@/types';

export const usePatchOnboardingMutation = (onSuccessCallback: () => void) => {
  return useMutation({
    mutationFn: async (data: { body: OnboardingRequestBody; accessToken: string }) => {
      const { body, accessToken } = data;
      return await patchOnboarding(body, accessToken);
    },
    onSuccess: onSuccessCallback,
    onError: () => {
      throw new Error('온보딩 정보를 보내는 데 실패했습니다.');
    },
  });
};
