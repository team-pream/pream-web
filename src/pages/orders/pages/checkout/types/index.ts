export const CARD_COMPANIES = [
  { id: 'KB', name: '국민' },
  { id: 'shinhan', name: '신한' },
  { id: 'hana', name: '하나' },
  { id: 'woori', name: '우리' },
];

export interface AddressForm {
  receiverName: string;
  detailAddress: string;
  paymentMethod: string;
  phone: string;
}
