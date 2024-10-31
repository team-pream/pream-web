export interface GetProductsParamType {
  category?: number;
  status?: number;
}

export interface ProductType {
  categoryId: number;
  id: number;
  description: string;
  title: string;
  images: string[];
  isLiked: boolean;
  price: number;
  sellerId: string;
  status: string;
}

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
