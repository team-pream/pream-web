import {
  GetProductsParams,
  GetProductsDetailResponse,
  GetProductsResponse,
  GetProductsCurationResponse,
  GetProductsSalesListResponse,
} from '@/types';
import { api } from '@/api/api';

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

export const getProductsSalesList = async () => {
  const response = await api.get<GetProductsSalesListResponse>(`/products/sales-list`);
  return response.data;
};
