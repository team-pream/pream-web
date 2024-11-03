import { useMemo } from 'react';

export function useValidation() {
  return useMemo(
    () => ({
      images: {
        required: '최소 1장의 이미지를 업로드 해 주세요',
        validate: (files: File[]) => {
          if (!files) return '최소 1장의 이미지를 업로드 해 주세요';
          if (files.length > 10) return '이미지는 최대 10장까지 업로드 할 수 있어요';
          return true;
        },
      },

      condition: {
        required: '상품 상태를 선택해 주세요',
      },

      price: {
        required: '판매 희망가를 입력해 주세요',
        validate: (value: string | number) => {
          const numericValue = parseInt(value.toString().replace(/,/g, ''), 10);
          if (isNaN(numericValue)) return '숫자 형식으로 입력해 주세요';
          if (numericValue < 0) return '0원 이상 입력해 주세요';
          if (numericValue > 10000000000) return '최대 10,000,000,000원까지 입력 가능해요';
          return true;
        },
      },

      categoryId: {
        required: '카테고리를 선택해 주세요',
      },

      title: {
        required: '글 제목을 입력해 주세요',
        minLength: { value: 2, message: '최소 2자 이상의 제목을 입력해 주세요' },
        maxLength: { value: 100, message: '제목은 최대 100자까지 입력할 수 있어요' },
      },

      description: {
        required: '글 내용을 입력해 주세요',
        minLength: { value: 10, message: '최소 10자 이상의 내용을 입력해 주세요' },
        maxLength: { value: 1000, message: '내용은 최대 1,000자까지 입력할 수 있어요' },
      },

      contact: {
        required: '공개 연락처를 입력해 주세요.',
      },
    }),
    []
  );
}
