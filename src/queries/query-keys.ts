import { GetProductsParamsType } from '@/types/product';

export const QUERY_KEYS = {
  GET_CATEGORIES: ['GET_PRODUCTS_CATEGORIES'],

  GET_PRODUCTS: (params: GetProductsParamsType) => ['GET_PRODUCTS', params],
  POST_PRODUCTS_UPLOAD: ['POST_PRODUCTS_UPLOAD'],
} as const;
