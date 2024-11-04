import {
  GetProductsParams,
  GetProductsDetailResponse,
  GetProductsResponse,
  GetProductsCurationResponse,
} from '@/types';
import { api, formApi } from '@/api/api';

export const getProducts = async (params: GetProductsParams) => {
  const response = await api.get<GetProductsResponse>('/products', { params });
  return response.data;
};

export const getProductsCuration = async () => {
  const response = await api.get<GetProductsCurationResponse>('/products/curation');
  return response.data;
};

export const getProductsDetail = async (productId: string) => {
  const response = await api.get<GetProductsDetailResponse>(`/products/${productId}`);
  const productData = response.data;

  if (productData.status === 'RESERVED') {
    productData.status = '예약중';
  }

  if (productData.status === 'SOLD_OUT') {
    productData.status = '판매완료';
  }

  return response.data;
};

export const postProductsUpload = async (body: FormData) => {
  const response = await formApi.post('/products/upload', body);
  return response.data;
};

export const patchProductsDetail = async (productId: string, body: FormData) => {
  const response = await formApi.patch(`/products/${productId}`, body);
  return response.data;
};

export const deleteProductsDetail = async (productId: string) => {
  const response = await api.delete(`/products/${productId}`);
  return response.data;
};
