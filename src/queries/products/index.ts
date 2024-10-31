import { getProducts } from '@/api/products';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query-keys';
import { GetProductsParamType } from '@/types';
import { getProduct } from '@/api/products';
import { Product } from '@/types';

export const useGetProductsQuery = (params: GetProductsParamType) => {
  return useQuery({
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
  return useQuery<Product, Error>({
    queryKey: QUERY_KEYS.GET_PRODUCT_DETAIL(productId),
    queryFn: async () => {
      if (!productId) throw new Error('상품 ID가 제공되지 않았습니다.');
      return await getProduct(productId);
    },
  });
};
