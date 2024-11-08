import { AppBar, Layout } from '@/components';
import { AppBarBack, Clear, FabPlus } from '@/assets/icons';
import { GNB, FAB } from '@/components';
import AddressList from './components/address-list';
import { useState, useEffect } from 'react';
import AddressForm from './components/address-form';
import { useGetUsersProfileQuery } from '@/queries';
import { PatchUsersAddressBody } from '@/types';
import { useNavigate, useLocation } from 'react-router-dom';
import { Dialog, Text } from '@/components';
import theme from '@/styles/theme';
import { editClear } from '../main/index.styles';
type PageState = 'list' | 'form';

interface AddressData {
  username: string;
  phone: string;
  address: PatchUsersAddressBody;
}

export default function Address() {
  const [page, setPage] = useState<PageState>('list');
  const { data, refetch } = useGetUsersProfileQuery(); // refetch 추가
  const [userData, setUserData] = useState<AddressData | null>(null);
  const [isCancelDialogOpen, setIsCancelDialogOpen] = useState<boolean>(false); // 추가

  const location = useLocation();
  const [showUpdateMessage, setShowUpdateMessage] = useState<string | false>(
    location.state?.editSuccess || false
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (showUpdateMessage) {
      const timer = setTimeout(() => {
        setShowUpdateMessage(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
    if (data) {
      const { username, phone, address } = data;
      if (address) setUserData({ username, phone, address });
      else setUserData(null);
    }
  }, [data, showUpdateMessage]);

  const getMessage = () => {
    switch (showUpdateMessage) {
      case 'registered':
        return '주소가 등록되었습니다.';
      case 'updated':
        return '주소가 수정되었습니다.';
      default:
        return '';
    }
  };

  const handleSaveAddress = () => {
    refetch();
    setPage('list');
    setShowUpdateMessage('registered'); // 등록 메시지 표시
  };

  const handleBackClick = () => {
    if (page === 'form') {
      setIsCancelDialogOpen(true); // form 페이지에서 뒤로가기 시 취소 다이얼로그 표시
    } else {
      navigate(-1);
    }
  };

  return (
    <Layout>
      <AppBar prefix={<AppBarBack height="24px" cursor="pointer" onClick={handleBackClick} />} />

      {page === 'list' ? (
        <>
          <AddressList userData={userData} onEditClick={() => userData && setPage('form')} />
          {!userData && (
            <FAB icon={<FabPlus width="20px" height="20px" />} onClick={() => setPage('form')} />
          )}
          {showUpdateMessage && (
            <div css={editClear}>
              <Clear width="16px" style={{ marginRight: '8px' }} />
              <Text typo="body4" color={theme.colors.white}>
                {getMessage()}
              </Text>
            </div>
          )}
        </>
      ) : (
        <AddressForm onSave={handleSaveAddress} initialData={userData?.address} />
      )}
      <GNB />

      {isCancelDialogOpen && (
        <Dialog
          type="error"
          title="등록을 취소 할까요?"
          description={`페이지를 나가면 작성한 내용은 저장되지 않아요`}
          primaryActionLabel="나가기"
          secondaryActionLabel="닫기"
          onPrimaryAction={() => {
            setIsCancelDialogOpen(false);
            setPage('list');
          }}
          onSecondaryAction={() => setIsCancelDialogOpen(false)} // 닫기를 선택하면 그대로 머무름
        />
      )}
    </Layout>
  );
}
