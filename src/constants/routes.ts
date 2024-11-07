export const ROUTE_PATHS = {
  LOGIN: '/login',
  ONBOARDING: '/onboarding',

  MAIN: '/',

  CATEGORIES: '/categories',

  PRODUCTS: '/products',
  PRODUCTS_DETAIL: (productId: number) => `/products/${productId}`,
  PRODUCTS_UPLOAD: '/products/upload',

  ORDER: (orderId: number) => `/orders/${orderId}`,
  ORDER_PAYMENT: '/orders/payment',
  ORDER_COMPLETE: '/orders/complete',
  ORDER_FAILURE: '/orders/failure',

  MYPAGE: '/mypage',
  MYPAGE_INFO: '/mypage/user/edit',
  MYPAGE_ADDRESS: '/mypage/address/edit',
  MYPAGE_SALES_HISTORY: '/mypage/sales-list',
  MYPAGE_PURCHASE_HISTORY: '/mypage/purchase-list',
};
