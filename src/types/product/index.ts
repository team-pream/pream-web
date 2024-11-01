export const PRODUCT_CONDITION = {
  NEW: 'NEW',
  SLIGHTLY_USED: 'SLIGHTLY_USED',
  HEAVILY_USED: 'HEAVILY_USED',
} as const;

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

export interface GetProductsParamsType {
  category?: number;
  status?: number;
}

export interface PostProductsUploadBodyType {
  images: File[];
  condition: keyof typeof PRODUCT_CONDITION;
  price: number;
  categoryId: number;
  title: string;
  description: string;
  contact: string;
}
