export const PAYMENT_METHODS = {
  CARD: 'CARD',
  TRANSFER: 'TRANSFER',
  VIRTUAL_ACCOUNT: 'VIRTUAL_ACCOUNT',
  MOBILE_PHONE: 'MOBILE_PHONE',
  CULTURE_GIFT_CERTIFICATE: 'CULTURE_GIFT_CERTIFICATE',
  FOREIGN_EASY_PAY: 'FOREIGN_EASY_PAY',
} as const;

export const PAYMENT_METHODS_LABEL = {
  CARD: '신용∙체크카드',
  TRANSFER: '계좌이체',
  VIRTUAL_ACCOUNT: '가상계좌',
  MOBILE_PHONE: '휴대폰',
  CULTURE_GIFT_CERTIFICATE: '문화상품권',
  FOREIGN_EASY_PAY: '해외간편결제',
} as const;
