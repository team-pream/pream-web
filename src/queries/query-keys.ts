import { GetProductsParamType } from '@/types';

export const QUERY_KEYS = {
  GET_CATEGORIES: ['GET_CATEGORIES'],
  GET_PRODUCTS: (params: GetProductsParamType) => ['GET_PRODUCTS', params],
  GET_CURATION: ['GET_CURATION'],
  GET_PRODUCT_DETAIL: (productId: string) => ['GET_PRODUCTS_DETAIL', productId],
} as const;
