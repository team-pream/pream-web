import {
  deleteProductsDetail,
  getProducts,
  getProductsCuration,
  getProductsDetail,
  patchProductsDetail,
  postProductsUpload,
} from '@/api/products';
import {
  GetProductsParams,
  GetProductsDetailResponse,
  GetProductsResponse,
  GetProductsCurationResponse,
} from '@/types/products';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/queries/query-keys';

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

export const usePatchProductsDetailMutation = (productId: string) => {
  return useMutation({
    mutationKey: QUERY_KEYS.PATCH_PRODUCTS_DETAIL(productId),
    mutationFn: async ({ productId, body }: { productId: string; body: FormData }) => {
      try {
        return await patchProductsDetail(productId, body);
      } catch {
        throw new Error('상품 수정에 실패했습니다.');
      }
    },
  });
};

export const useDeleteProductsDetailMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (productId: string) => {
      try {
        return await deleteProductsDetail(productId);
      } catch {
        throw new Error('상품 삭제에 실패했습니다.');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
};
