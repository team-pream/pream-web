import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import {
  AppBar,
  Button,
  ChipRadioGroup,
  Dialog,
  Input,
  Layout,
  RadioGroup,
  Text,
} from '@/components';
import { useGetCategoriesQuery } from '@/queries/categories';
import { usePostProductsUploadMutation } from '@/queries/products';
import { PostProductsUploadBodyType, PRODUCT_CONDITION } from '@/types/product';
import { AppBarBack } from '@/assets/icons';
import { Category } from '@/types/category';
import theme from '@/styles/theme';
import { UploadImage, Info } from './components';
import { useValidation } from './hooks/use-validation';
import { wrap } from './components/info/index.styles';
import { fixedCTAButtonWrapper, hr, productInfo, textarea, wrapper } from './index.styles';

const PRODUCT_CONDITION_ITEMS = [
  { label: '새상품', value: PRODUCT_CONDITION.NEW },
  { label: '사용감 적음', value: PRODUCT_CONDITION.SLIGHTLY_USED },
  { label: '사용감 많음', value: PRODUCT_CONDITION.HEAVILY_USED },
];

export default function Upload() {
  const navigate = useNavigate();

  const [isCancelDialogOpen, setIsCancelDialogOpen] = useState<boolean>(false);

  const { data: categories } = useGetCategoriesQuery();
  const { mutateAsync: uploadProduct } = usePostProductsUploadMutation();

  const {
    handleSubmit,
    formState: { errors },
    control,
    clearErrors,
    setError,
  } = useForm<PostProductsUploadBodyType>();
  const validationRules = useValidation();

  const onSubmit = async (form: PostProductsUploadBodyType) => {
    if (!form) return;

    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('condition', form.condition);
    formData.append('price', form.price.toString());
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
      <Layout>
        <AppBar
          prefix={
            <AppBarBack
              height="24px"
              cursor="pointer"
              onClick={() => {
                setIsCancelDialogOpen(true);
              }}
            />
          }
        />

        <form css={wrapper} onSubmit={handleSubmit(onSubmit)}>
          <section css={wrap}>
            <Text typo="title1" color={theme.colors.black}>
              판매
            </Text>
            <hr css={hr} />
          </section>

          <section css={productInfo}>
            <Info title="상품 정보" isWrapped={false}>
              <Controller
                name="images"
                control={control}
                rules={validationRules.images}
                render={({ field: { onChange } }) => (
                  <UploadImage
                    onChange={(files: File[]) => {
                      if (files.length < 1 || files.length > 10) {
                        setError('images', {
                          type: 'manual',
                          message:
                            files.length < 1
                              ? '이미지를 최소 1장 업로드해 주세요.'
                              : '이미지는 최대 10장까지 업로드 가능합니다.',
                        });
                      } else {
                        clearErrors('images');
                      }
                      onChange(files);
                    }}
                  />
                )}
              />
            </Info>

            <Info title="상품 상태">
              <Controller
                name="condition"
                control={control}
                rules={validationRules.condition}
                render={({ field: { onChange } }) => (
                  <RadioGroup items={PRODUCT_CONDITION_ITEMS} onChange={onChange} />
                )}
              />
            </Info>

            <Info title="판매 희망가">
              <Controller
                name="price"
                control={control}
                rules={validationRules.price}
                render={({ field }) => (
                  <Input
                    prefix={<Text typo="body5">₩</Text>}
                    id="price"
                    {...field}
                    errorMessage={errors.price?.message}
                  />
                )}
              />
            </Info>

            <Info title="카테고리" isWrapped={false}>
              <Controller
                name="categoryId"
                control={control}
                rules={validationRules.categoryId}
                render={({ field: { onChange } }) => (
                  <ChipRadioGroup
                    items={
                      categories?.slice(1).map((category: Category) => ({
                        value: category.id,
                        label: category.name,
                      })) ?? []
                    }
                    onChange={onChange}
                  />
                )}
              />
            </Info>

            <Info title="제목">
              <Controller
                name="title"
                control={control}
                rules={validationRules.title}
                render={({ field }) => (
                  <Input
                    id="title"
                    placeholder="제목을 입력해 주세요"
                    spellCheck={false}
                    {...field}
                    errorMessage={errors.title?.message}
                  />
                )}
              />
            </Info>

            <Info title="내용">
              <Controller
                name="description"
                control={control}
                rules={validationRules.description}
                render={({ field }) => (
                  <textarea
                    id="description"
                    css={textarea}
                    placeholder="상세 내용을 입력해 주세요"
                    spellCheck={false}
                    {...field}
                  />
                )}
              />
            </Info>
          </section>

          <hr css={hr} />

          <Info title="추가 정보">
            <Controller
              name="contact"
              control={control}
              rules={validationRules.contact}
              render={({ field }) => (
                <Input
                  id="contact"
                  label="연락처"
                  placeholder="원하는 연락 수단을 입력해 주세요"
                  spellCheck={false}
                  {...field}
                />
              )}
            />
          </Info>

          <div css={fixedCTAButtonWrapper}>
            <Button type="submit" size="xl">
              판매하기
            </Button>
          </div>
        </form>
      </Layout>

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
