import { GetProductsDetailResponse, GetUsersMeResponse } from '@/types';
import { PaymentCheckout } from '../payment-checkout';
import { Button, Input } from '@/components';
import { usePostOrdersProductMutation } from '@/queries/orders';
import usePayment from '../../hooks/use-payment';
import OrderTotal from '../order-total';
import ProductInfo from '../product-info';
import { AddressForm } from '../../types';
import useSearchAddress from '../../hooks/use-search-address';
import { Controller, useForm } from 'react-hook-form';
import SelectBasic from '../shipping-info/select-default';
import { addressWrapper } from '../shipping-info/index.styles';
import { wrapper } from '../payment-checkout/index.styles';

interface Props {
  user: GetUsersMeResponse;
  product: GetProductsDetailResponse;
}

export function OrderForm({ user, product }: Props) {
  const { getAddressInputPopup, userAddress, address } = useSearchAddress({ user });
  const { selectedPaymentMethod, setSelectedPaymentMethod } = usePayment({
    user: user!,
    product: product!,
  });

  const { mutateAsync: postOrdersProduct } = usePostOrdersProductMutation(product.id);

  const { handleSubmit, control } = useForm<AddressForm>();

  const onShippingInfoChange = async (form: AddressForm) => {
    if (!form.receiverName || !form.detailAddress || !form.phone) return;

    try {
      await postOrdersProduct({
        receiverName: form.receiverName,
        paymentAmount: product.price,
        paymentMethod: selectedPaymentMethod!,
        shippingAddress: {
          roadAddress: address?.roadAddress || form.roadAddress,
          detailAddress: form.detailAddress,
        },
        phone: form.phone,
      });
    } catch (error) {
      console.error('Error posting orders product:', error);
    }
  };

  return (
    <div>
      <form css={wrapper} onSubmit={handleSubmit((form) => onShippingInfoChange(form))}>
        <SelectBasic />

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
            label="배송지"
            placeholder="주소를 입력해 주세요"
            defaultValue={userAddress.roadAddress}
            value={address?.roadAddress}
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

        <ProductInfo product={product} />

        <PaymentCheckout
          selectedPaymentMethod={selectedPaymentMethod}
          setSelectedPaymentMethod={setSelectedPaymentMethod}
        />

        <OrderTotal price={product.price ?? 0} />

        <Button size="xl" type="submit">
          {product.price.toLocaleString()}원 결제하기
        </Button>
      </form>
    </div>
  );
}
