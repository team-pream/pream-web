import { useEffect, useMemo, useState } from 'react';
import { GetUsersMeResponse, PatchUsersAddressBody } from '@/types';

interface Address {
  roadAddress: string;
  jibunAddress: string;
  zonecode: string;
  buildingName?: string;
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

  const getAddress = () => {
    new window.daum.Postcode({
      oncomplete: (data: Address) =>
        setAddress({
          zonecode: data.zonecode,
          roadAddress: data.roadAddress,
          jibunAddress: data.jibunAddress,
          detailAddress: '',
        }),
    }).open();
  };

  const userAddress: PatchUsersAddressBody = useMemo(
    () => ({
      zonecode: user.address?.zonecode,
      roadAddress: user.address?.roadAddress,
      jibunAddress: user.address?.jibunAddress,
      detailAddress: user.address?.detailAddress,
    }),
    [user.address]
  );

  return { address, setAddress, getAddress, userAddress };
};

export default useSearchAddress;
