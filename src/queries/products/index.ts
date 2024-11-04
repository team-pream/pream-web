import { getProducts, getProductsCuration, getProductsDetail } from '@/api/products';
import {
  GetProductsParams,
  GetProductsDetailResponse,
  GetProductsResponse,
  GetProductsCurationResponse,
} from '@/types/products';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query-keys';

export const useGetProductsQuery = (params: GetProductsParams) => {
  return useQuery<GetProductsResponse, Error>({
    queryKey: QUERY_KEYS.GET_PRODUCTS(params),
    queryFn: async () => {
      try {
        return await getProducts(params);
      } catch {
        throw new Error('상품 정보를 가져오는 데 실패했습니다.');
      }
    },
  });
};

export const useGetProductQuery = (productId: string) => {
  return useQuery<GetProductsDetailResponse, Error>({
    queryKey: QUERY_KEYS.GET_PRODUCTS_DETAIL(productId),
    queryFn: async () => {
      try {
        return await getProductsDetail(productId);
      } catch {
        throw new Error('상품 상세 정보를 가져오는 데 실패했습니다.');
      }
    },
  });
};

export const useGetProductsCurationQuery = () => {
  return useQuery<GetProductsCurationResponse, Error>({
    queryKey: QUERY_KEYS.GET_PRODUCTS_CURATION,
    queryFn: async () => {
      try {
        return await getProductsCuration();
      } catch {
        throw new Error('상품 목록을 가져오는 데 실패했습니다.');
      }
    },
  });
};
