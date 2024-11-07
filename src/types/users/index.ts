export interface PatchAuthOnboardingBody {
  email: string;
  nickname: string;
  phone: string;
}

export interface PostUsersCheckNicknameBody {
  nickname: string;
}

export interface GetUsersMeResponse {
  id: string;
  username: string;
  nickname: string;
  phone: string;
  address: PatchUsersAddressBody;
  email: string;
  contact: string;
  pet: GetPetsResponse;
  bankAccount?: { bank: string; accountNumber: string };
}

export interface PatchUsersMeBody {
  nickname?: string;
  phone?: string;
  bankAccount?: { bank: string; accountNumber: string };
}

export interface GetPetsResponse {
  id: string;
  userId: string;
  name: string;
  image: string;
  petType: 'DOG' | 'CAT';
  createdAt: string;
  updatedAt: string;
}

export interface PatchUsersAddressBody {
  roadAddress: string;
  detailAddress: string;
}

export interface PatchUsersMeBody {
  nickname?: string;
  phone?: string;
  bankAccount?: { bank: string; accountNumber: string };
}

export interface PatchUsersPetBody {
  image: string;
  name: string;
  petType: 'DOG' | 'CAT';
}

export interface PostUsersPetBody {
  image: string;
  name: string;
  petType: string;
}

export interface PatchUsersPetBody {
  image: string;
  name: string;
  petType: 'DOG' | 'CAT';
}
