import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  GetProductsDetailResponse,
  GetUsersMeResponse,
  PostOdersProductForm,
  PostOrdersProductResponse,
} from '@/types';
import { usePostOrdersProductMutation, usePatchUsersAddressMutation } from '@/queries';
import { Button, Dialog, Input } from '@/components';
import usePayment from '@/pages/orders/pages/checkout/hooks/use-payment';
import useSearchAddress from '@/pages/orders/pages/checkout/hooks/use-search-address';
import { PaymentMethod, ProductInfo, TotalAmount } from '@/pages/orders/pages/checkout/components';
import { addressWrapper, shippingInfo, wrapper } from './index.styles';
import Checkbox from './components/checkbox';
import useValidateOrderForm from '../../hooks/use-validate-order-form';

interface Props {
  user: GetUsersMeResponse;
  product: GetProductsDetailResponse;
}

export function OrderForm({ user, product }: Props) {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState<boolean>(false);

  const validationRules = useValidateOrderForm();
  const { getAddressInputPopup, userAddress, address } = useSearchAddress({ user });
  const { selectedPaymentMethod, setSelectedPaymentMethod, requestPayment } = usePayment({
    user: user!,
  });

  const { mutateAsync: postOrdersProduct } = usePostOrdersProductMutation(product.id);
  const { mutateAsync: patchUsersAddress } = usePatchUsersAddressMutation();

  const {
    handleSubmit,
    control,
    formState: { errors },
    clearErrors,
    setValue,
  } = useForm<PostOdersProductForm>();

  const onShippingInfoChange = async (form: PostOdersProductForm) => {
    if (!form.receiverName || !form.detailAddress || !form.roadAddress || !form.phone) return;

    if (isChecked) {
      await patchUsersAddress({
        roadAddress: form.roadAddress ?? address?.roadAddress,
        detailAddress: form.detailAddress,
      });
    }

    const orderSheet: PostOrdersProductResponse = await postOrdersProduct({
      receiverName: form.receiverName,
      paymentAmount: product.price,
      paymentMethod: selectedPaymentMethod!,
      shippingAddress: {
        roadAddress: form.roadAddress ?? address?.roadAddress,
        detailAddress: form.detailAddress,
      },
      phone: form.phone.replace(/-/g, ''),
    });

    await requestPayment({ product, user, order: orderSheet });
  };

  const onError = () => {
    setIsErrorDialogOpen(true);
  };

  useEffect(() => {
    if (address?.roadAddress) {
      setValue('roadAddress', address.roadAddress);
    }
  }, [address?.roadAddress, control, setValue]);

  return (
    <>
      <div>
        <form css={wrapper} onSubmit={handleSubmit((form) => onShippingInfoChange(form), onError)}>
          <Checkbox isChecked={isChecked} onChange={() => setIsChecked((prev) => !prev)} />

          <div css={shippingInfo}>
            <Controller
              name="receiverName"
              control={control}
              defaultValue={user.username}
              rules={validationRules.receiverName}
              render={({ field }) => (
                <Input
                  label="받는 사람"
                  value={field.value}
                  placeholder="성함을 입력해 주세요"
                  onChange={field.onChange}
                />
              )}
            />

            <div css={addressWrapper}>
              <Controller
                name="roadAddress"
                control={control}
                defaultValue={userAddress.roadAddress ?? ''}
                rules={validationRules.roadAddress}
                render={({ field }) => (
                  <Input
                    type="text"
                    label="배송지"
                    placeholder="주소를 입력해 주세요"
                    {...field}
                    value={address?.roadAddress}
                    defaultValue={userAddress.roadAddress}
                    onClick={getAddressInputPopup}
                    onChange={(e) => field.onChange(e.target.value)}
                    suffix={
                      <Button type="button" size="xs" shape="box" onClick={getAddressInputPopup}>
                        주소 검색
                      </Button>
                    }
                  />
                )}
              />

              <Controller
                name="detailAddress"
                control={control}
                defaultValue={userAddress.detailAddress}
                rules={validationRules.detailAddress}
                render={({ field }) => (
                  <Input
                    placeholder="상세 주소를 입력해 주세요"
                    value={field.value}
                    defaultValue={userAddress.detailAddress}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>

            <Controller
              name="phone"
              control={control}
              defaultValue={user.phone
                .replace(/[^0-9]/g, '')
                .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/, '$1-$2-$3')
                .replace(/(-{1,2})$/g, '')}
              rules={validationRules.phone}
              render={({ field }) => (
                <Input
                  label="연락처"
                  placeholder="연락처를 입력해 주세요"
                  value={field.value}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const input = e.target.value;
                    const formattedInput = input
                      .replace(/[^0-9]/g, '')
                      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/, '$1-$2-$3')
                      .replace(/(-{1,2})$/g, '');
                    field.onChange(formattedInput);
                  }}
                  maxLength={13}
                />
              )}
            />
          </div>

          <ProductInfo product={product} />

          <Controller
            name="paymentMethod"
            control={control}
            rules={validationRules.paymentMethod}
            render={({ field }) => (
              <PaymentMethod
                selectedPaymentMethod={selectedPaymentMethod}
                setSelectedPaymentMethod={(method) => {
                  setSelectedPaymentMethod(method);
                  field.onChange(method);
                }}
                {...field}
              />
            )}
          />

          <TotalAmount price={product.price ?? 0} />

          <Button size="xl" type="submit">
            {product.price.toLocaleString()}원 결제하기
          </Button>
        </form>
      </div>

      {isErrorDialogOpen && (
        <Dialog
          type="error"
          title="입력한 항목을 확인해 주세요"
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
