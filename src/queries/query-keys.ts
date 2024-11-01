import { GetProductsParams } from '@/types/products';

export const QUERY_KEYS = {
  GET_CATEGORIES: ['GET_CATEGORIES'],
  GET_PRODUCTS: (params: GetProductsParams) => ['GET_PRODUCTS', params],
  PATCH_AUTH_ONBOARDING: ['PATCH_AUTH_ONBOARDING'],
  POST_USERS_CHECK_NICKNAME: ['POST_CHECK_NICKNAME'],
  POST_PETS_PROFILE: ['POST_PET_PROFILE'],
  GET_USERS_ME: ['GET_USERS_ME'],
  GET_PRODUCTS_CURATION: ['GET_PRODUCTS_CURATION'],
  GET_PRODUCTS_DETAIL: (productId: string) => ['GET_PRODUCTS_DETAIL', productId],
} as const;
