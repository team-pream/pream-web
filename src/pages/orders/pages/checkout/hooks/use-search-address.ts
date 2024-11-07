import { useEffect, useMemo, useState } from 'react';
import { GetUsersMeResponse, PatchUsersAddressBody } from '@/types';

interface Address {
  roadAddress: string;
}

interface Props {
  user: GetUsersMeResponse;
}

const useSearchAddress = ({ user }: Props) => {
  const [address, setAddress] = useState<Partial<PatchUsersAddressBody>>();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const getAddressInputPopup = () => {
    new window.daum.Postcode({
      oncomplete: (data: Address) =>
        setAddress({
          roadAddress: data.roadAddress,
          detailAddress: '',
        }),
    }).open();
  };

  const userAddress: PatchUsersAddressBody = useMemo(
    () => ({
      roadAddress: user.address?.roadAddress,
      detailAddress: user.address?.detailAddress,
    }),
    [user.address]
  );

  return { address, setAddress, getAddressInputPopup, userAddress };
};

export default useSearchAddress;
