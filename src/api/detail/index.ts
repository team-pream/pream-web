// api/detail.ts
import { api } from '../api';

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

export const getProduct = async (productId: number): Promise<Product> => {
  const response = await api.get(`/products/${productId}`, {
    // headers: {
    //   Authorization: `Bearer ${AccessToken}`,
    // }, //아직 로그인과 연결안됨
  });
  return response.data;
};
