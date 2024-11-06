import { BANKS } from '@/constants/bank';
import { Category } from '@/types';

export type ProductStatus = 'AVAILABLE' | 'RESERVED' | 'SOLD_OUT';
export type ProductCondition = 'NEW' | 'SLIGHTLY_USED' | 'HEAVILY_USED';
export type BANK = (typeof BANKS)[number]['value'];
export type BANK_KR = (typeof BANKS)[number]['label'];

export const PRODUCT_CONDITION = {
  NEW: 'NEW',
  SLIGHTLY_USED: 'SLIGHTLY_USED',
  HEAVILY_USED: 'HEAVILY_USED',
} as const;

export interface GetProductsParams {
  category?: number;
  status?: number;
}

export interface GetProductsResponse {
  totalCount: number;
  products: ProductListProduct[];
}

export interface ProductListProduct {
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

export interface GetProductsCurationResponse {
  new: ProductsCurationProduct[];
  random: ProductsCurationProduct[];
  cheap: ProductsCurationProduct[];
  popular: ProductsCurationProduct[];
}

export interface ProductsCurationProduct {
  id: number;
  title: string;
  price: number;
  status: ProductStatus;
  images: string[];
  categoryId: number;
}

export interface GetProductsDetailResponse {
  id: number;
  title: string;
  price: number;
  status: string;
  condition: ProductCondition;
  images: string[];
  description: string;
  category: Pick<Category, 'id' | 'name'>;
  seller: {
    id: string;
    nickname: string;
    contact: string;
    bankAccount: {
      bank: BANK;
      bankAccount: string;
    };
  };

  likesCount: number;
  isLiked: boolean;
  createdAt: string;
}

export interface PostProductsUploadBody {
  images: File[];
  condition: ProductCondition;
  price: number;
  categoryId: number;
  title: string;
  description: string;
  bank: {
    bank: BANK;
    bankAccount: string;
  } | null;
  contact: string;
}

export interface ProductForm {
  images: File[];
  condition: ProductCondition;
  price: number;
  categoryId: number;
  title: string;
  description: string;
  bankAccount: {
    bank: BANK_KR;
    bankAccount: string;
  };
  contact: string;
}

export const convertProductsDetailToProductsUploadBody = (
  data: GetProductsDetailResponse
): ProductForm => {
  return {
    images: data.images as unknown as File[],
    condition: data.condition,
    price: data.price,
    categoryId: data.category.id,
    title: data.title,
    description: data.description,
    bankAccount: {
      bank: BANKS.find((bank) => bank.value === data.seller.bankAccount.bank)?.label || '국민은행',
      bankAccount: data.seller.bankAccount.bankAccount,
    },
    contact: data.seller.contact,
  };
};
export interface GetProductsSearchParam {
  keyword: string;
  status?: number;
}

export interface GetProductsSalesProductResponse {
  createdAt: string;
  id: number;
  title: string;
  price: number;
  status: ProductStatus;
  images: string[];
}

export type GetProductsSalesListResponse = GetProductsSalesProductResponse[];
