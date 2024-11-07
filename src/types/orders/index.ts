import { PAYMENT_METHODS } from '@/pages/orders/types';
import { PRODUCT_STATUS } from '../products';

export type PAYMENT_METHODS_TYPE = (typeof PAYMENT_METHODS)[keyof typeof PAYMENT_METHODS];

export type PAYMENT_STATUS =
  | 'READY'
  | 'IN_PROGRESS'
  | 'WAITING_FOR_DEPOSIT'
  | 'DONE'
  | 'CANCELED'
  | 'PARTIAL_CANCEL'
  | 'ABORTED'
  | 'EXPIRED';

export interface PostOdersProductForm {
  paymentAmount: number;
  paymentMethod: PAYMENT_METHODS_TYPE;
  receiverName: string;
  roadAddress: string;
  detailAddress: string;
  phone: string;
}

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

export interface PostOrdersProductResponse {
  id: string;
  userId: string;
  receiverName: string;
  paymentAmount: number;
  paymentMethod: PAYMENT_METHODS_TYPE;
  shippingAddress: Address;
  phone: string;
  status: PRODUCT_STATUS;
  paymentStatus: PAYMENT_STATUS;
  productId: string;
  product: {
    id: number;
    title: string;
    description: string;
    images: string[];
  };
  createdAt: string;
  updatedAt: string;
}
