import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog } from '@/components';
import { PostProductsUploadBody } from '@/types';
import { Form } from '@/pages/products/components';
import { usePostProductsUploadMutation } from '@/queries/products';

export default function Upload() {
  const navigate = useNavigate();
  const [isCancelDialogOpen, setIsCancelDialogOpen] = useState<boolean>(false);

  const { mutateAsync: uploadProduct, isSuccess: isUploadSuccess } =
    usePostProductsUploadMutation();

  const handleFormSubmit = async (form: PostProductsUploadBody) => {
    if (!form) return;

    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('condition', form.condition);
    formData.append('price', form.price.toString().replace(/,/g, ''));
    formData.append('categoryId', form.categoryId.toString());
    formData.append('description', form.description);
    formData.append('contact', form.contact);
    form.images.forEach((image) => formData.append('images', image));

    try {
      await uploadProduct(formData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Form
        onSubmit={handleFormSubmit}
        isSuccess={isUploadSuccess}
        onChangeDialog={() => setIsCancelDialogOpen((prev) => !prev)}
      />

      {isCancelDialogOpen && (
        <Dialog
          type="error"
          title="상품 업로드를 취소할까요?"
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