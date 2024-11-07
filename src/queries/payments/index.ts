import { useMutation } from '@tanstack/react-query';
import { postPaymentsToss } from '@/api';
import { PostPaymentsTossBody } from '@/types';
import { QUERY_KEYS } from '../query-keys';

export const usePostPaymentsTossMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_PAYMENTS_TOSS,
    mutationFn: async (body: PostPaymentsTossBody) => {
      return await postPaymentsToss({ body });
    },
  });
};
