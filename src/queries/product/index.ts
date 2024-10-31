import { useMutation, useQuery } from '@tanstack/react-query';
import { getProducts, postProductsUpload } from '@/api/product';
import { GetProductsParamsType } from '@/types/product';
import { QUERY_KEYS } from '@/queries/query-keys';

export const useGetProductsQuery = (params: GetProductsParamsType) => {
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

export const usePostProductsUploadMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_PRODUCTS_UPLOAD,
    mutationFn: async (body: FormData) => {
      try {
        return await postProductsUpload(body);
      } catch {
        throw new Error('상품 등록에 실패했습니다.');
      }
    },
  });
};
