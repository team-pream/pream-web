import { Controller, useForm } from 'react-hook-form';
import { AppBar, Button, ChipRadioGroup, Input, Layout, RadioGroup, Text } from '@/components';
import { useGetCategoriesQuery } from '@/queries/categories';
import { usePostProductsUploadMutation } from '@/queries/products';
import { PostProductsUploadBodyType, PRODUCT_CONDITION } from '@/types/product';
import { AppBarBack } from '@/assets/icons';
import { Category } from '@/types/category';
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

const PRODUCT_CONDITION_ITEMS = [
  { label: '새상품', value: PRODUCT_CONDITION.NEW },
  { label: '사용감 적음', value: PRODUCT_CONDITION.SLIGHTLY_USED },
  { label: '사용감 많음', value: PRODUCT_CONDITION.HEAVILY_USED },
];

export default function Upload() {
  const { data: categories } = useGetCategoriesQuery();
  const { mutateAsync: uploadProduct } = usePostProductsUploadMutation();

  const {
    handleSubmit,
    formState: { errors },
    control,
    clearErrors,
    setError,
  } = useForm<PostProductsUploadBodyType>();

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
    <Layout>
      <AppBar prefix={<AppBarBack height="24px" />} />

      <form css={wrapper} onSubmit={handleSubmit(onSubmit)}>
        <section css={wrap}>
          <Text typo="title1" color={theme.colors.black}>
            판매
          </Text>
          <hr css={hr} />
        </section>

        <section css={productInfo}>
          <div css={nowrap}>
            <Info title="상품 정보">
              <Controller
                name="images"
                control={control}
                defaultValue={[]}
                rules={{
                  validate: (files) => {
                    if (files.length < 1) return '이미지를 최소 1장 업로드해 주세요.';
                    if (files.length > 10) return '이미지는 최대 10장까지 업로드 가능합니다.';
                    return true;
                  },
                }}
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
          </div>

          <div css={wrap}>
            <Info title="상품 상태">
              <Controller
                name="condition"
                control={control}
                render={({ field: { onChange } }) => (
                  <RadioGroup items={PRODUCT_CONDITION_ITEMS} onChange={onChange} />
                )}
                rules={{ required: '상품 상태를 선택해 주세요.' }}
              />
            </Info>
          </div>

          <div css={wrap}>
            <Info title="판매 희망가">
              <Controller
                name="price"
                control={control}
                render={({ field }) => (
                  <Input
                    prefix={<Text typo="body5">₩</Text>}
                    id="price"
                    {...field}
                    errorMessage={errors.price?.message}
                  />
                )}
                rules={{
                  required: '판매 희망가를 입력해 주세요.',
                  validate: (value) => {
                    const numericValue = parseInt(value.toString().replace(/,/g, ''), 10);
                    if (numericValue < 0) return '가격은 0 이상이어야 합니다.';
                    if (numericValue > 10000000000)
                      return '가격은 10,000,000,000 이하이어야 합니다.';
                    return true;
                  },
                }}
              />
            </Info>
          </div>

          <div css={nowrap}>
            <Info title="카테고리">
              <Controller
                name="categoryId"
                control={control}
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
                rules={{ required: '카테고리를 선택해 주세요.' }}
              />
            </Info>
          </div>

          <div css={wrap}>
            <Info title="제목">
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <Input
                    id="title"
                    placeholder="제목을 입력해 주세요"
                    spellCheck={false}
                    {...field}
                  />
                )}
                rules={{ required: '글 제목을 입력해 주세요.' }}
              />
            </Info>
          </div>

          <div css={wrap}>
            <Info title="내용">
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <textarea
                    id="description"
                    css={textarea}
                    placeholder="상세 내용을 입력해 주세요"
                    spellCheck={false}
                    {...field}
                  />
                )}
                rules={{ required: '글 내용을 입력해 주세요.' }}
              />
            </Info>
          </div>
        </section>

        <div css={wrap}>
          <hr css={hr} />
          <Info title="연락처">
            <Controller
              name="contact"
              control={control}
              render={({ field }) => (
                <Input
                  id="contact"
                  label="오픈채팅방"
                  placeholder="카카오톡 오픈채팅방 URL을 입력해 주세요"
                  spellCheck={false}
                  {...field}
                />
              )}
              rules={{ required: '공개 연락처를 입력해 주세요.' }}
            />
          </Info>
        </div>

        <div css={fixedCTAButtonWrapper}>
          <Button type="submit" size="xl">
            판매하기
          </Button>
        </div>
      </form>
    </Layout>
  );
}
