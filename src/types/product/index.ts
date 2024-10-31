export interface GetProductsParamsType {
  category?: number;
  status?: number;
}

export type PRODUCT_CONDITON = 'NEW' | 'SLIGHTLY_USED' | 'HEAVILY_USED';

export interface PostProductsUploadBodyType {
  images: File[];
  condition: PRODUCT_CONDITON;
  price: number;
  categoryId: number;
  title: string;
  description: string;
  contact: string;
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
