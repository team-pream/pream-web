import { GetProductsParamType } from '@/types';
import { api } from '@/api/api';

export interface Category {
  id: number;
  name: string;
}

export interface Seller {
  id: string;
  nickname: string;
}

export enum ProductCondition {
  NEW = 'NEW',
  SLIGHTLY_USED = 'SLIGHTLY_USED',
  HEAVILY_USED = 'HEAVILY_USED',
}

export enum ProductStatus {
  AVAILABLE = '구매 가능',
  SOLD_OUT = '판매 완료',
  RESERVED = '예약중',
}

export interface Product {
  id: number;
  title: string;
  price: number;
  status: ProductStatus;
  condition: ProductCondition;
  images: string[];
  description: string;
  createdAt: string;
  category: Category;
  seller: Seller;
  likesCount: number;
  isLiked: boolean;
}

export const getProducts = async (params: GetProductsParamType) => {
  const response = await api.get('/products', { params });
  return response.data;
};

export const getCuration = async () => {
  const response = await api.get('/products/curation');
  return response.data;
};
export const getProduct = async (productId: string): Promise<Product> => {
  const response = await api.get(`/products/${productId}`, {
    // headers: {
    //   Authorization: `Bearer ${AccessToken}`,
    // }, //아직 로그인과 연결안됨
  });
  const productData = response.data;
  if (productData.status === 'AVAILABLE') {
    productData.status = '예약중';
  }
  return response.data;
};
