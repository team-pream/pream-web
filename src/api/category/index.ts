import { api } from '..';

export const getCategories = async () => {
  const response = await api.get(
    'https://port-0-pream-server-m2kkbe2ebf996543.sel4.cloudtype.app/categories'
  );
  return response;
};
