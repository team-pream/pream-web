import { PAYMENT_METHODS } from '@/pages/orders/types';

export type PAYMENT_METHODS_TYPE = (typeof PAYMENT_METHODS)[keyof typeof PAYMENT_METHODS];

export interface PostOdersProductBody {
  paymentAmount: number;
  paymentMethod: PAYMENT_METHODS_TYPE;
  receiverName: string;
  shippingAddress: Address;
  phone: string;
}

export interface Address {
  roadAddress: string;
  detailAddress: string;
}
