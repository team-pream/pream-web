import { useMutation } from '@tanstack/react-query';
import { postPaymentsCancel, postPaymentsToss } from '@/api';
import { PostPaymentsCancelBody, PostPaymentsTossBody } from '@/types';
import { QUERY_KEYS } from '../query-keys';

export const usePostPaymentsTossMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_PAYMENTS_TOSS,
    mutationFn: async (body: PostPaymentsTossBody) => {
      return await postPaymentsToss({ body });
    },
  });
};

export const usePostPaymentsCancelMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_PAYMENTS_CANCEL,
    mutationFn: async ({ orderId, body }: { orderId: string; body: PostPaymentsCancelBody }) => {
      return await postPaymentsCancel({ orderId, body });
    },
  });
};
