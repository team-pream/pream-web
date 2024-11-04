import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Dialog } from '@/components';
import { ProductForm } from '@/types';
import { useGetProductsDetailQuery, usePatchProductsDetailMutation } from '@/queries/products';
import { Form } from '@/pages/products/components';
import { BANKS } from '@/constants/bank';

export default function Edit() {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();

  const [isCancelDialogOpen, setIsCancelDialogOpen] = useState<boolean>(false);

  const { data: product } = useGetProductsDetailQuery(productId!);
  const { mutate: updateProduct, isSuccess } = usePatchProductsDetailMutation(productId!);

  const handleFormSubmit = (form: ProductForm) => {
    if (!form) return;

    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('condition', form.condition);
    formData.append('price', form.price.toString());
    formData.append('categoryId', form.categoryId.toString());
    formData.append('description', form.description);
    formData.append('contact', form.contact);
    form.images.forEach((image) => formData.append('images', image));
    formData.append(
      'bankAccount',
      JSON.stringify({
        bank: BANKS.find((bank) => bank.label === form.bankAccount.bank)?.value,
        bankAccount: form.bankAccount.bankAccount,
      })
    );

    try {
      updateProduct({ productId: productId!, body: formData });
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Form
        defaultForm={product}
        onSubmit={handleFormSubmit}
        isSuccess={isSuccess}
        onChangeDialog={() => setIsCancelDialogOpen((prev) => !prev)}
      />

      {isCancelDialogOpen && (
        <Dialog
          type="error"
          title="상품 정보 수정을 취소할까요?"
          description="페이지를 나가면 작성한 내용은 저장되지 않아요"
          primaryActionLabel="나가기"
          secondaryActionLabel="닫기"
          onPrimaryAction={() => navigate(-1)}
          onSecondaryAction={() => setIsCancelDialogOpen(false)}
        />
      )}
    </>
  );
}
