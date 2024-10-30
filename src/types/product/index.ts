export interface GetProductsParamsType {
  category?: number;
  status?: number;
}

export interface PostProductsUploadBodyType {
  images: File[];
  status: string;
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
