import { useMemo } from 'react';

export default function useValidateOrderForm() {
  return useMemo(
    () => ({
      receiverName: {
        required: '받는 사람의 이름을 입력해 주세요',
        validate: (value: string) => {
          if (!value) return '받는 사람의 이름을 입력해 주세요';
          if (value.length > 10) return '받는 사람의 이름은 최대 10글자까지 입력할 수 있어요';
          if (!/^[가-힣a-zA-Z]+$/.test(value)) return '한글 또는 영문으로 입력해 주세요';
          return true;
        },
      },

      detailAddress: {
        required: '상세 주소를 입력해 주세요',
        validate: (value: string) => {
          if (!value) return '상세 주소를 입력해 주세요';
          if (value.length > 30) return '상세 주소는 최대 30자까지 입력 가능해요';
          return true;
        },
      },

      paymentMethod: {
        required: '결제 수단을 선택해 주세요',
      },

      phone: {
        required: '연락처를 입력해 주세요',
        validate: (value: string) => {
          if (!value) return '연락처를 입력해 주세요';
          if (value.length > 30) return '상세 주소는 최대 30자까지 입력 가능해요';
          return true;
        },
      },
    }),
    []
  );
}
