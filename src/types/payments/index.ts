export interface PostPaymentsTossBody {
  paymentKey: string;
  orderId: string;
  amount: number;
}

export interface PostPaymentsTossResponse {
  id: string;
  userId: string;
  receiverName: string;
  paymentAmount: number;
  status: string;
  paymentStatus: string;
  paymentMethod: string;
  detailPaymentMethod: string;
  shippingAddress: ShippingAddress;
  phone: string;
  productId: number;
  createdAt: string;
  updatedAt: string;
  product: Product;
}

interface ShippingAddress {
  roadAddress: string;
  detailAddress: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
  status: string;
  images: string[];
}

export interface PostPaymentsCancelBody {
  cancelReason?: string;
}

export interface PostPaymentsCancelResponse {
  errorCode: number;
  title: string;
  description: string;
}
