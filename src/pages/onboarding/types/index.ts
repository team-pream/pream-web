export type PetType = 'CAT' | 'DOG';

export const PET_TYPE = {
  CAT: 'CAT',
  DOG: 'DOG',
} as const;

export interface UserInfoForm {
  email: string;
  nickname: string;
  phone: string;
  petType: PetType | null;
  petName: string;
}
