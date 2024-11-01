import { AppBar } from '@/components';
import { Layout } from '@/components';
import { AppBarBack, FabPlus } from '@/assets/icons';
import { GNB, FAB } from '@/components';
import AddressList from './components/address-list';
import { useState } from 'react';
import AddressForm from './components/address-form';

type PageState = 'list' | 'form';

export default function Juso() {
  const [page, setPage] = useState<PageState>('list'); // 현재 페이지 상태를 관리
  const address = '주소주소'; //임시주소

  // 주소 등록 후 목록 페이지로 이동
  const handleSaveAddress = () => {
    setPage('list');
  };

  return (
    <Layout>
      <AppBar prefix={<AppBarBack height="17px" cursor="pointer" />} />

      {page === 'list' ? (
        <>
          <AddressList address={address} />
          <FAB icon={<FabPlus width="20px" height="20px" />} onClick={() => setPage('form')} />
        </>
      ) : (
        <AddressForm onSave={handleSaveAddress} />
      )}

      <GNB />
    </Layout>
  );
}
