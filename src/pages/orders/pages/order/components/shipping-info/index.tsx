import { ChangeEvent, useState } from 'react';
import { Input, Button } from '@/components';
import useSearchAddress from '@/pages/orders/pages/order/hooks/use-search-address';
import { addressWrapper, wrapper } from './index.styles';
import { GetUsersMeResponse } from '@/types';
import SelectBasic from './select-default';

interface Props {
  user: GetUsersMeResponse;
}

export default function ShippingInfo({ user }: Props) {
  const [orderer, setOrderer] = useState<{ name: string; phone?: string }>({
    name: user.username,
    phone: user.phone ?? '',
  });

  const { setAddress, getAddress, userAddress } = useSearchAddress({ user });

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>, field: string) => {
    const { value } = e.target;

    if (field === 'name') {
      setOrderer((prev) => ({ ...prev, name: value }));
    } else if (field === 'address') {
      setAddress((prev) => ({ ...prev, roadAddress: value }));
    } else if (field === 'addressDetail') {
      setAddress((prev) => ({ ...prev, detailAddress: value }));
    } else if (field === 'phone') {
      setOrderer((prev) => ({ ...prev, phone: value }));
    }
  };

  return (
    <div css={wrapper}>
      <SelectBasic />

      <Input
        label="받는 사람"
        value={orderer.name}
        placeholder="성함을 입력해 주세요"
        onChange={(e) => handleChangeInput(e, 'name')}
      />

      <div css={addressWrapper}>
        <Input
          label="배송지"
          placeholder="주소를 입력해 주세요"
          value={userAddress.roadAddress}
          defaultValue={userAddress.roadAddress}
          onChange={(e) => handleChangeInput(e, 'address')}
          suffix={
            <Button size="xs" shape="box" onClick={getAddress}>
              주소 검색
            </Button>
          }
        />
        <Input
          placeholder="상세 주소를 입력해 주세요"
          value={userAddress.detailAddress}
          defaultValue={userAddress.detailAddress}
          onChange={(e) => handleChangeInput(e, 'addressDetail')}
        />
      </div>

      <Input
        label="연락처"
        placeholder="연락처를 입력해 주세요"
        value={orderer.phone}
        onChange={(e) => handleChangeInput(e, 'phone')}
      />
    </div>
  );
}
