import { useState, useEffect } from 'react';
import { Input } from '@/components/input';
import { addressWrapper } from './index.styles';
import { Button } from '@/components';
import { usePatchUserAddress } from '@/queries/users';
import { PatchUsersAddressBody } from '@/types';
import SelectBasic from './select-default';
import { GetUsersMeResponse } from '@/types';

interface AddressData {
  roadAddress: string;
  jibunAddress: string;
  zonecode: string;
  buildingName?: string;
}
interface UserProps {
  user: GetUsersMeResponse;
}

const AddAddress = ({ user }: UserProps) => {
  const [name, setName] = useState(user.username || '');
  const [address, setAddress] = useState(user.address?.roadAddress || '');
  const [jibunAddress, setJibunAddress] = useState(user.address?.jibunAddress || '');
  const [addressDetail, setAddressDetail] = useState(user.address?.detailAddress || '');
  const [zonecode, setZoneCode] = useState(user.address?.zonecode || '');
  const [phone, setPhone] = useState(user.phone || '');

  const { mutate: updateAddress } = usePatchUserAddress(() => alert('주소가 저장되었습니다.'));
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  const handleAddress = () => {
    new window.daum.Postcode({
      oncomplete: (data: AddressData) => {
        const buildingName = data.buildingName ? ` (${data.buildingName})` : '';
        setAddress(data.roadAddress + buildingName);
        setJibunAddress(data.jibunAddress);
        setZoneCode(data.zonecode);
      },
    }).open();
  };

  const handleSaveAddress = async () => {
    const requestData: PatchUsersAddressBody = {
      roadAddress: address,
      jibunAddress: jibunAddress,
      detailAddress: addressDetail,
      zonecode: zonecode,
    };
    updateAddress(requestData);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const { value } = e.target;

    if (field === 'name') setName(value);
    else if (field === 'address') setAddress(value);
    else if (field === 'addressDetail') setAddressDetail(value);
    else if (field === 'phone') setPhone(value);
  };

  return (
    <div css={addressWrapper}>
      <SelectBasic />
      <Input
        label="이름"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(e) => handleChangeInput(e, 'name')}
      />
      <Input
        label="도로명 주소"
        placeholder="주소를 입력해주세요"
        value={address}
        onChange={(e) => handleChangeInput(e, 'address')}
        suffix={
          <Button size="xs" variant="box" onClick={handleAddress}>
            주소 검색
          </Button>
        }
      />
      <Input
        label="상세주소"
        placeholder="상세 주소를 입력해주세요"
        value={addressDetail}
        onChange={(e) => handleChangeInput(e, 'addressDetail')}
      />
      <Input
        label="연락처"
        placeholder="연락처를 입력해주세요"
        value={phone}
        onChange={(e) => handleChangeInput(e, 'phone')}
      />
      <Button size="l" onClick={handleSaveAddress}>
        주소 저장
      </Button>
    </div>
  );
};

export default AddAddress;
