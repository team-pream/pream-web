import { api } from '@/api';
import { OnboardingRequestBody } from '@/types';

export const patchOnboarding = async (body: OnboardingRequestBody, accessToken: string) => {
  const response = await api.patch('/user/onboarding', body, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });
  return response;
};
