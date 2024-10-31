import { useState } from 'react';
import { AppBarBack } from '@/assets/icons';
import { Category } from '@/types/category';
import { AppBar, Button, ChipRadioGroup, Input, Layout, RadioGroup, Text } from '@/components';
import { useGetCategoriesQuery } from '@/queries/categories';
import { usePostProductsUploadMutation } from '@/queries/products';
import theme from '@/styles/theme';
import {
  fixedCTAButtonWrapper,
  hr,
  nowrap,
  productInfo,
  textarea,
  wrap,
  wrapper,
} from './index.styles';
import { UploadImage, Info } from './components';
import { PostProductsUploadBody } from '@/types';

export default function Upload() {
  const { data: categories } = useGetCategoriesQuery();
  const { mutateAsync: uploadProduct } = usePostProductsUploadMutation();

  const [form] = useState<PostProductsUploadBody>();

  const [images, setImages] = useState<string[]>([]);
  const [imagesToUpload, setImagesToUpload] = useState<File[]>([]);

  const handleImagesChange = (newImages: string[]) => {
    setImages(newImages);
  };

  const handleFilesChange = (newFiles: File[]) => {
    setImagesToUpload(newFiles);
  };

  const handleSubmitForm = async () => {
    if (!form) return;

    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('condition', form.condition);
    formData.append('price', form.price.toString());
    formData.append('images', form.images[0]);
    formData.append('categoryId', form.categoryId.toString());
    formData.append('description', form.description);
    formData.append('contact', form.contact);
    imagesToUpload.forEach((file) => formData.append('images', file));

    try {
      await uploadProduct(formData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <AppBar prefix={<AppBarBack height="24px" />} />

      <section css={wrapper}>
        <section css={wrap}>
          <Text typo="title1" color={theme.colors.black}>
            판매
          </Text>
          <hr css={hr} />
        </section>

        <section css={productInfo}>
          <div css={nowrap}>
            <Info title="상품 정보">
              <UploadImage
                images={images}
                onChange={handleImagesChange}
                onFilesChange={handleFilesChange}
              />
            </Info>
          </div>

          <div css={wrap}>
            <Info title="상품 상태">
              <RadioGroup items={[]} onChange={() => {}} />
            </Info>
          </div>

          <div css={wrap}>
            <Info title="판매 희망가">
              <Input prefix={<Text typo="body5">₩</Text>} />
            </Info>
          </div>

          <div css={nowrap}>
            <Info title="카테고리">
              <ChipRadioGroup
                items={
                  categories?.slice(1).map((category: Category) => ({
                    value: category.id,
                    label: category.name,
                  })) ?? []
                }
              />
            </Info>
          </div>

          <div css={wrap}>
            <Info title="제목">
              <Input placeholder="제목을 입력해 주세요" spellCheck={false} />
            </Info>
          </div>

          <div css={wrap}>
            <Info title="내용">
              <textarea css={textarea} placeholder="상세 내용을 입력해 주세요" spellCheck={false} />
            </Info>
          </div>
        </section>

        <div css={wrap}>
          <hr css={hr} />
          <Info title="연락처">
            <Input label="오픈채팅방" placeholder="카카오톡 오픈채팅방 URL을 입력해 주세요" />
          </Info>
        </div>
      </section>

      <div css={fixedCTAButtonWrapper}>
        <Button type="submit" size="xl" onClick={handleSubmitForm}>
          판매하기
        </Button>
      </div>
    </Layout>
  );
}
