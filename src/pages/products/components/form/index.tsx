import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import {
  ActionSheet,
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
import {
  convertProductsDetailToProductsUploadBody,
  GetProductsDetailResponse,
  PostProductsUploadBody,
  PRODUCT_CONDITION,
} from '@/types/products';
import { AppBarBack } from '@/assets/icons';
import { Category } from '@/types/category';
import { fixedCTAButtonWrapper, hr, productInfo, textarea, wrap, wrapper } from './index.styles';
import { useValidation } from '@/pages/products/hooks/use-validation';
import UploadImage from '@/pages/products/components/upload-image';
import Info from '@/pages/products/components/info';
import theme from '@/styles/theme';
import { useState } from 'react';
import { BANKS } from '@/constants/bank';
import { DevTool } from '@hookform/devtools';

const PRODUCT_CONDITION_ITEMS = [
  { label: '새상품', value: PRODUCT_CONDITION.NEW },
  { label: '사용감 적음', value: PRODUCT_CONDITION.SLIGHTLY_USED },
  { label: '사용감 많음', value: PRODUCT_CONDITION.HEAVILY_USED },
];

interface Props {
  onSubmit: (form: PostProductsUploadBody) => void;
  defaultForm?: GetProductsDetailResponse;
  isSuccess?: boolean;
  onChangeDialog?: () => void;
}

export default function Form({ defaultForm, onSubmit, isSuccess, onChangeDialog }: Props) {
  const navigate = useNavigate();

  const [isBankActionSheetOpen, setIsBankActionSheetOpen] = useState<boolean>(false);
  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState<boolean>(false);

  const { data: categories } = useGetCategoriesQuery();
  const defaultValues = defaultForm && convertProductsDetailToProductsUploadBody(defaultForm);

  const { handleSubmit, control, clearErrors } = useForm<PostProductsUploadBody>();
  const validationRules = useValidation();

  const onError = () => {
    setIsErrorDialogOpen(true);
  };

  return (
    <>
      <Layout>
        <AppBar
          prefix={
            <AppBarBack
              height="24px"
              cursor="pointer"
              onClick={() => (isSuccess ? navigate(-1) : onChangeDialog?.())}
            />
          }
        />

        <form css={wrapper} onSubmit={handleSubmit(onSubmit, onError)}>
          <DevTool control={control} />
          <section css={wrap}>
            <Text typo="title1" color={theme.colors.black}>
              판매
            </Text>
          </section>

          <hr css={hr} />

          <section css={productInfo}>
            <Info title="상품 정보" isWrapped={false}>
              <Controller
                name="images"
                control={control}
                rules={validationRules.images}
                render={({ field: { onChange } }) => <UploadImage onChange={onChange} />}
              />
            </Info>

            <Info title="상품 상태">
              <Controller
                name="condition"
                control={control}
                rules={validationRules.condition}
                defaultValue={defaultValues?.condition}
                render={({ field: { onChange } }) => (
                  <RadioGroup
                    items={PRODUCT_CONDITION_ITEMS}
                    onChange={onChange}
                    defaultValue={defaultValues?.condition}
                  />
                )}
              />
            </Info>

            <Info title="판매 희망가">
              <Controller
                name="price"
                control={control}
                rules={validationRules.price}
                defaultValue={defaultValues?.price}
                render={({ field }) => (
                  <Input
                    id="price"
                    prefix={<Text typo="body5">₩</Text>}
                    defaultValue={defaultValues?.price}
                    {...field}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, ''); // 숫자만 남김
                      const formatted = value.replace(/\B(?=(\d{3})+(?!\d))/g, ','); // 천 단위 콤마 추가
                      field.onChange(formatted); // React Hook Form에 숫자 값 업데이트
                    }}
                    value={
                      field.value
                        ? field.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        : ''
                    } // 표시값에 포맷 적용
                  />
                )}
              />
            </Info>

            <Info title="카테고리" isWrapped={false}>
              <Controller
                name="categoryId"
                control={control}
                rules={validationRules.categoryId}
                defaultValue={defaultValues?.categoryId}
                render={({ field: { onChange } }) => (
                  <ChipRadioGroup
                    items={
                      categories?.slice(1).map((category: Category) => ({
                        value: category.id,
                        label: category.name,
                      })) ?? []
                    }
                    onChange={onChange}
                    defaultValue={defaultValues?.categoryId}
                  />
                )}
              />
            </Info>

            <Info title="제목">
              <Controller
                name="title"
                control={control}
                rules={validationRules.title}
                defaultValue={defaultValues?.title}
                render={({ field }) => (
                  <Input
                    id="title"
                    placeholder="제목을 입력해 주세요"
                    spellCheck={false}
                    {...field}
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
                    defaultValue={defaultValues?.description}
                    spellCheck={false}
                    {...field}
                  />
                )}
              />
            </Info>
          </section>

          <hr css={hr} />

          <Info title="판매 정산 계좌">
            <Controller
              name="bank.bank"
              control={control}
              rules={validationRules.bank}
              render={({ field }) => (
                <Input
                  id="bank.bank"
                  label="은행"
                  type="button"
                  defaultValue={defaultValues?.bank?.bank}
                  spellCheck={false}
                  onClick={() => setIsBankActionSheetOpen(true)}
                  {...field}
                />
              )}
            />

            <Controller
              name="bank.bankAccount"
              control={control}
              rules={validationRules.bankAccount}
              render={({ field }) => (
                <Input
                  id="bank.bankAccount"
                  label="계좌번호"
                  placeholder="계좌번호를 입력해 주세요"
                  defaultValue={defaultValues?.bank?.bankAccount}
                  spellCheck={false}
                  {...field}
                />
              )}
            />
          </Info>

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
                  defaultValue={defaultValues?.contact}
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

      {isBankActionSheetOpen && (
        <Controller
          name="bank.bank"
          control={control}
          rules={validationRules.condition}
          defaultValue={defaultValues?.bank?.bank}
          render={({ field: { onChange } }) => (
            <ActionSheet
              menus={BANKS}
              onClose={() => setIsBankActionSheetOpen(false)}
              onClickItem={(value: string | number) => {
                onChange(value);
                setIsBankActionSheetOpen(false);
              }}
            />
          )}
        />
      )}

      {isErrorDialogOpen && (
        <Dialog
          type="error"
          title="등록 오류"
          description="필수 입력 항목을 모두 입력해 주세요"
          primaryActionLabel="확인"
          onPrimaryAction={() => {
            clearErrors();
            setIsErrorDialogOpen(false);
          }}
        />
      )}
    </>
  );
}
