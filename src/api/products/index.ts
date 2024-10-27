import { api } from '..';

export const getProducts = async (categoryId: number, statusId: number | null) => {
  const queryParams = [];
  if (categoryId !== null) {
    queryParams.push(`category=${categoryId}`);
  }
  if (statusId !== null) {
    queryParams.push(`status=${statusId}`);
  }

  // 조건에 따라 queryString을 생성
  const queryString =
    queryParams.length === 1 && queryParams[0].startsWith('category')
      ? `?${queryParams[0]}` // categoryId만 있는 경우
      : queryParams.length > 0
        ? `?${queryParams.join('&')}` // 둘 다 있는 경우
        : '';
  const response = await api.get(`/products${queryString}`);
  return response.data;
};
