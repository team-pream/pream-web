export interface ParamType {
  category?: number;
  status?: number;
}

export interface ProductType {
  categoryId: number;
  id: number;
  description: string;
  name: string;
  images: string[];
  isLiked: boolean;
  price: number;
  sellerId: string;
  status: string;
}
