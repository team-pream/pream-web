import { api } from '../api';

export const getCuration = async () => {
  const response = await api.get('/products/curation');
  return response.data;
};
