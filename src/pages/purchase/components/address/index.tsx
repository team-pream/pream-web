import { useState, useEffect } from 'react';
import { Input } from '@/components/input';
import { addressWrapper } from './index.styles';
import SelectBasic from './select-default';
import { Button } from '@/components';

interface UserProps {
  user: {
    name: string;
    phone: string;
    address: string;
    addressDetail: string;
  };
}
interface AddressData {
  roadAddress: string;
  jibunAddress: string;
  zonecode: string;
  buildingName?: string;
}

const AddAddress = ({ user }: UserProps) => {
  const [name, setName] = useState(user.name);
  const [address, setAddress] = useState(user.address);
  const [addressDetail, setAddressDetail] = useState(user.addressDetail);
  const [phone, setPhone] = useState(user.phone);
  const [nameError, setNameError] = useState<string | undefined>();
  const [addressError, setAddressError] = useState<string | undefined>();
  const [addressDetailError, setAddressDetailError] = useState<string | undefined>();
  const [phoneError, setPhoneError] = useState<string | undefined>();

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
        setAddressDetail(data.jibunAddress);
      },
    }).open();
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const { value } = e.target;

    if (value) {
      if (field === 'name') setNameError(undefined);
      else if (field === 'address') setAddressError(undefined);
      else if (field === 'addressDetail') setAddressDetailError(undefined);
      else if (field === 'phone') setPhoneError(undefined);
    } else {
      if (field === 'name') setNameError('값을 입력해주세요');
      else if (field === 'address') setAddressError('값을 입력해주세요');
      else if (field === 'addressDetail') setAddressDetailError('값을 입력해주세요');
      else if (field === 'phone') setPhoneError('값을 입력해주세요');
    }
    if (field === 'name') setName(value);
    else if (field === 'address') setAddress(value);
    else if (field === 'addressDetail') setAddressDetail(value);
    else if (field === 'phone') {
      if (/^[0-9]*$/.test(value)) {
        setPhone(value);
      } else {
        setPhoneError('숫자만 입력 가능합니다.');
      }
    }
  };

  return (
    <div css={addressWrapper}>
      <SelectBasic />
      <Input
        label="이름"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(e) => handleChangeInput(e, 'name')}
        errorMessage={nameError}
      />
      <Input
        label="배송지"
        placeholder="주소를 입력해주세요"
        value={address}
        onChange={(e) => handleChangeInput(e, 'address')}
        errorMessage={addressError}
        suffix={
          <Button size="xs" variant="box" onClick={handleAddress}>
            주소 검색
          </Button>
        }
      />
      <Input
        placeholder="상세주소를 입력해주세요"
        value={addressDetail}
        onChange={(e) => handleChangeInput(e, 'addressDetail')}
        errorMessage={addressDetailError}
      />
      <Input
        label="연락처"
        placeholder="연락처를 입력해주세요"
        value={phone}
        onChange={(e) => handleChangeInput(e, 'phone')}
        errorMessage={phoneError}
      />
    </div>
  );
};

export default AddAddress;
