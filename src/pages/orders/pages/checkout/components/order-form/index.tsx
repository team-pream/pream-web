import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { GetProductsDetailResponse, GetUsersMeResponse } from '@/types';
import { usePostOrdersProductMutation, usePatchUsersAddressMutation } from '@/queries';
import { Button, Input } from '@/components';
import usePayment from '@/pages/orders/pages/checkout/hooks/use-payment';
import { AddressForm } from '@/pages/orders/pages/checkout/types';
import useSearchAddress from '@/pages/orders/pages/checkout/hooks/use-search-address';
import { PaymentMethod, ProductInfo, TotalAmount } from '@/pages/orders/pages/checkout/components';
import { addressWrapper, shippingInfo, wrapper } from './index.styles';
import Checkbox from './components/checkbox';

interface Props {
  user: GetUsersMeResponse;
  product: GetProductsDetailResponse;
}

export function OrderForm({ user, product }: Props) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const { getAddressInputPopup, userAddress, address } = useSearchAddress({ user });
  const { selectedPaymentMethod, setSelectedPaymentMethod } = usePayment({
    user: user!,
    product: product!,
  });

  const { mutateAsync: postOrdersProduct } = usePostOrdersProductMutation(product.id);
  const { mutateAsync: patchUsersAddress } = usePatchUsersAddressMutation();

  const { handleSubmit, control } = useForm<AddressForm>();

  const onShippingInfoChange = async (form: AddressForm) => {
    if (!form.receiverName || !form.detailAddress || !form.phone) return;

    if (isChecked) {
      await patchUsersAddress({
        roadAddress: address?.roadAddress ?? userAddress.roadAddress,
        detailAddress: form.detailAddress,
      });
    }

    await postOrdersProduct({
      receiverName: form.receiverName,
      paymentAmount: product.price,
      paymentMethod: selectedPaymentMethod!,
      shippingAddress: {
        roadAddress: address?.roadAddress ?? userAddress.roadAddress,
        detailAddress: form.detailAddress,
      },
      phone: form.phone,
    });
  };

  return (
    <div>
      <form css={wrapper} onSubmit={handleSubmit((form) => onShippingInfoChange(form))}>
        <Checkbox isChecked={isChecked} onChange={() => setIsChecked((prev) => !prev)} />

        <div css={shippingInfo}>
          <Controller
            name="receiverName"
            control={control}
            defaultValue={user.username}
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
            <Input
              type="text"
              label="배송지"
              placeholder="주소를 입력해 주세요"
              value={address?.roadAddress}
              defaultValue={userAddress.roadAddress}
              onClick={getAddressInputPopup}
              suffix={
                <Button size="xs" shape="box" onClick={getAddressInputPopup}>
                  주소 검색
                </Button>
              }
            />

            <Controller
              name="detailAddress"
              control={control}
              defaultValue={userAddress.detailAddress}
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
            defaultValue={user.phone}
            render={({ field }) => (
              <Input
                label="연락처"
                placeholder="연락처를 입력해 주세요"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </div>

        <ProductInfo product={product} />

        <PaymentMethod
          selectedPaymentMethod={selectedPaymentMethod}
          setSelectedPaymentMethod={setSelectedPaymentMethod}
        />

        <TotalAmount price={product.price ?? 0} />

        <Button size="xl" type="submit">
          {product.price.toLocaleString()}원 결제하기
        </Button>
      </form>
    </div>
  );
}
