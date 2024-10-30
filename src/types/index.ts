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

export interface OnboardingRequestBody {
  email: string;
  nickname: string;
  phone: string;
}

export interface CheckNicknameRequestBody {
  nickname: string;
}

export interface PetProfileRequestBody {
  name: string;
  petType: string;
}
