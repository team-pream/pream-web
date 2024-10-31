// src/queries/user/userProfile/index.ts
import { patchUserOnboarding } from '@/api/user/user-profile';
import { useMutation } from '@tanstack/react-query';
import { PatchUserOnboardingBody } from '@/types';

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
