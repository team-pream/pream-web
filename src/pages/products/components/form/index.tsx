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
import { useGetCategoriesQuery } from '@/queries';
import {
  convertProductsDetailToProductsUploadBody,
  GetProductsDetailResponse,
  PRODUCT_CONDITION,
  ProductForm,
} from '@/types/products';
import { AppBarBack, ToolTip } from '@/assets/icons';
import {
  fixedCTAButtonWrapper,
  hr,
  productInfo,
  textarea,
  wrap,
  wrapper,
  amount,
  toolTip,
  toolTipInfo,
  amountPrice,
} from './index.styles';
import { Category } from '@/types';
import useValidation from '@/pages/products/hooks/use-validation';
import UploadImage from '@/pages/products/components/upload-image';
import Info from '@/pages/products/components/info';
import theme from '@/styles/theme';
import { useEffect, useState } from 'react';
import { BANKS } from '@/constants/bank';

const PRODUCT_CONDITION_ITEMS = [
  { label: '새상품', value: PRODUCT_CONDITION.NEW },
  { label: '사용감 적음', value: PRODUCT_CONDITION.SLIGHTLY_USED },
  { label: '사용감 많음', value: PRODUCT_CONDITION.HEAVILY_USED },
];

interface Props {
  onSubmit: (form: ProductForm) => void;
  defaultForm?: GetProductsDetailResponse;
  isSuccess?: boolean;
  onChangeDialog?: () => void;
}

export default function Form({ defaultForm, onSubmit, isSuccess, onChangeDialog }: Props) {
  const navigate = useNavigate();

  const [isBankActionSheetOpen, setIsBankActionSheetOpen] = useState<boolean>(false);
  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState<boolean>(false);
  const [settlementAmount, setSettlementAmount] = useState<number>(0);

  const { data: categories } = useGetCategoriesQuery();
  const defaultValues = defaultForm && convertProductsDetailToProductsUploadBody(defaultForm);
  console.log(defaultValues);
  const {
    handleSubmit,
    control,
    formState: { errors },
    clearErrors,
  } = useForm<ProductForm>();
  const validationRules = useValidation();

  const onError = () => {
    setIsErrorDialogOpen(true);
  };

  // 정산 금액 계산
  useEffect(() => {
    if (defaultValues?.price) {
      const price = Number(defaultValues.price.toString().replace(/,/g, ''));
      setSettlementAmount(Math.floor(price * 0.965)); // 3.5% 수수료
    }
  }, [defaultValues?.price]);

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
                  <div>
                    <Input
                      id="price"
                      prefix={<Text typo="body5">₩</Text>}
                      defaultValue={defaultValues?.price}
                      {...field}
                      value={
                        field.value
                          ? field.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                          : ''
                      }
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '');
                        const formatted = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                        field.onChange(formatted);
                        setSettlementAmount(Math.floor(Number(value) * 0.965));
                      }}
                    />
                    <div css={amount}>
                      <Text typo="body1">예상 정산 금액</Text>
                      <div css={toolTip}>
                        <ToolTip width={12} height={12} />
                        <div css={toolTipInfo}>
                          <Text typo="body1">판매수수료 안내</Text>
                          <Text typo="body6">
                            상품 판매 시, 상품 금액에서 판매 수수료가 제외된 정사 금액이 입금됩니다.
                            판매 수수료는 판매된 상품 금액의 3.5%이며, 추후 변동될 수 있습니다.
                          </Text>
                        </div>
                      </div>
                      <div css={amountPrice}>
                        <Text typo="body1" color={theme.colors.green200}>
                          {settlementAmount.toLocaleString()}
                        </Text>
                        <Text typo="body1">원</Text>
                      </div>
                    </div>
                  </div>
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
                    defaultValue={defaultValues?.title}
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
                defaultValue={defaultValues?.description}
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
              name="bank"
              control={control}
              rules={validationRules.bank}
              defaultValue={defaultValues?.bank}
              render={({ field }) => (
                <Input
                  id="bank"
                  label="은행"
                  type="button"
                  defaultValue={defaultValues?.bank}
                  spellCheck={false}
                  onClick={() => setIsBankActionSheetOpen(true)}
                  {...field}
                />
              )}
            />

            <Controller
              name="accountNumber"
              control={control}
              rules={validationRules.accountNumber}
              defaultValue={defaultValues?.accountNumber}
              render={({ field }) => (
                <Input
                  id="bankAccount"
                  label="계좌번호"
                  placeholder="계좌번호를 입력해 주세요"
                  defaultValue={defaultValues?.accountNumber}
                  spellCheck={false}
                  maxLength={20}
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
              defaultValue={defaultValues?.contact}
              render={({ field }) => (
                <Input
                  id="contact"
                  label="연락처"
                  placeholder="원하는 연락 수단을 입력해 주세요"
                  defaultValue={defaultValues?.contact}
                  spellCheck={false}
                  maxLength={20}
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
          name="bank"
          control={control}
          rules={validationRules.bank}
          defaultValue={defaultValues?.bank}
          render={({ field: { onChange } }) => (
            <ActionSheet
              menus={[...BANKS]}
              onClose={() => setIsBankActionSheetOpen(false)}
              onClickItem={(value: string | number) => {
                onChange(BANKS.find((bank) => bank.value === value)?.label ?? '');
                setIsBankActionSheetOpen(false);
              }}
            />
          )}
        />
      )}

      {isErrorDialogOpen && (
        <Dialog
          type="error"
          title="필수 항목이 누락됐어요"
          description={Object.values(errors)[0]?.message}
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
