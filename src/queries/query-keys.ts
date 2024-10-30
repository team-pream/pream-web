import {
  GetProductsParamType,
  OnboardingRequestBody,
  CheckNicknameRequestBody,
  PetProfileRequestBody,
} from '@/types';

export const QUERY_KEYS = {
  GET_CATEGORIES: () => ['GET_CATEGORIES'],
  GET_PRODUCTS: (params: GetProductsParamType) => ['GET_PRODUCTS', params],
  PATCH_ONBOARDING: (body: OnboardingRequestBody) => ['PATCH_ONBOARDING', body],
  POST_CHECKNICKNAME: (body: CheckNicknameRequestBody) => ['POST_CHECKNICKNAME', body],
  POST_PETPROFILE: (body: PetProfileRequestBody) => ['POST_PETPROFILE', body],
} as const;
