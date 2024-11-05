import { Input, Button } from '@/components';
import useSearchAddress from '@/pages/orders/pages/checkout/hooks/use-search-address';
import { addressWrapper, wrapper } from './index.styles';
import { GetUsersMeResponse } from '@/types';
import SelectBasic from './select-default';
import { Controller, useForm } from 'react-hook-form';
import { AddressForm } from '../../types';

interface Props {
  user: GetUsersMeResponse;
  onShippingInfoChange: (value: AddressForm) => void;
}

export default function ShippingInfo({ user, onShippingInfoChange }: Props) {
  const { getAddressInputPopup, userAddress } = useSearchAddress({ user });

  const { handleSubmit, control } = useForm<AddressForm>();

  return (
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
        <Controller
          name="roadAddress"
          control={control}
          defaultValue={userAddress.roadAddress}
          render={({ field }) => (
            <Input
              label="배송지"
              placeholder="주소를 입력해 주세요"
              value={userAddress.roadAddress}
              defaultValue={userAddress.roadAddress}
              onChange={field.onChange}
              suffix={
                <Button size="xs" shape="box" onClick={getAddressInputPopup}>
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
    </form>
  );
}
