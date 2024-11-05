import { AppBar, Layout } from '@/components';
import { AppBarBack, FabPlus } from '@/assets/icons';
import { GNB, FAB } from '@/components';
import AddressList from './components/address-list';
import { useState, useEffect } from 'react';
import AddressForm from './components/address-form';
import { useGetUsersMeQuery } from '@/queries/users';
import { PatchUserAddressBody } from '@/types';
import { useNavigate } from 'react-router-dom';
type PageState = 'list' | 'form';

interface AddressData {
  username: string;
  phone: string;
  address: PatchUserAddressBody;
}

interface FormProps {
  isSuccess?: boolean;
  onChangeDialog?: () => void;
}

export default function Address({ isSuccess, onChangeDialog }: FormProps) {
  const [page, setPage] = useState<PageState>('list');
  const { data, refetch } = useGetUsersMeQuery(); // refetch 추가
  const [userData, setUserData] = useState<AddressData | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (data) {
      const { username, phone, address } = data;
      if (address) setUserData({ username, phone, address });
      else setUserData(null);
    }
  }, [data]);

  const handleSaveAddress = () => {
    refetch(); // userData를 새로고침
    setPage('list');
  };

  return (
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

      {page === 'list' ? (
        <>
          <AddressList userData={userData} onEditClick={() => userData && setPage('form')} />
          {!userData && (
            <FAB icon={<FabPlus width="20px" height="20px" />} onClick={() => setPage('form')} />
          )}
        </>
      ) : (
        <AddressForm onSave={handleSaveAddress} initialData={userData?.address} />
      )}
      <GNB />
    </Layout>
  );
}
