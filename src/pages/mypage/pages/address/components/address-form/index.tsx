import { useEffect, useState } from 'react';
import SearchBar from './components/search-bar';
import KakaoMap from './components/map';
import axios from 'axios';
import { Text } from '@/components';
import {
  containTagWrapper,
  addressFormWrapper,
  defaultWrapper,
  buttonWrapper,
  formTagStyle,
} from './insex.styles';
import { Input, Button, Dialog } from '@/components';

interface addressData {
  roadAddress: string;
  jibunAddress: string;
  zonecode: string;
  buildingName?: string;
}

interface addressFormProps {
  onSave: () => void; // 부모 컴포넌트에서 목록 페이지로 이동하도록 하는 함수
}

const AddressForm = ({ onSave }: addressFormProps) => {
  const [roadAddress, setRoadAddress] = useState('');
  const [jibunAddress, setJibunAddress] = useState('');
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [showDetailInput, setShowDetailInput] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Dialog 표시 상태

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handlePostcodeSearch = () => {
    new window.daum.Postcode({
      oncomplete: async (data: addressData) => {
        const buildingName = data.buildingName ? ` (${data.buildingName})` : '';
        setRoadAddress(data.roadAddress + buildingName);
        setJibunAddress(data.jibunAddress);
        setShowDetailInput(true);

        try {
          const response = await axios.get(
            `https://dapi.kakao.com/v2/local/search/address.json?query=${data.roadAddress}`,
            {
              headers: { Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_API_KEY}` },
            }
          );

          if (response.data.documents.length > 0) {
            const { x, y } = response.data.documents[0].address;
            setLatitude(parseFloat(y));
            setLongitude(parseFloat(x));
          } else {
            console.error('No coordinates found for the address');
          }
        } catch (error) {
          console.error('Error fetching coordinates:', error);
        }
      },
    }).open();
  };

  const handleSave = () => {
    setIsDialogOpen(true); // Dialog 열기
  };

  const handleDialogConfirm = () => {
    setIsDialogOpen(false); // Dialog 닫기
    onSave(); // 부모 컴포넌트로 콜백 실행
  };

  return (
    <div css={addressFormWrapper}>
      <div css={defaultWrapper}>
        <SearchBar
          onSearch={handlePostcodeSearch}
          placeholder={roadAddress || '도로명이나 주소를 입력하세요'}
        />
      </div>
      {latitude !== null && longitude !== null && (
        <KakaoMap latitude={latitude} longitude={longitude} />
      )}
      <div css={defaultWrapper}>
        {roadAddress && (
          <div css={containTagWrapper}>
            <div css={formTagStyle}>
              <Text typo="body3">도로명</Text>
            </div>
            <Text typo="subtitle2">{roadAddress}</Text>
          </div>
        )}
        {jibunAddress && (
          <div css={containTagWrapper}>
            <div css={formTagStyle}>
              <Text typo="body3">지번</Text>
            </div>
            <Text typo="body4">{jibunAddress}</Text>
          </div>
        )}
        {showDetailInput && (
          <div>
            <div tabIndex={-1} css={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Input type="text" placeholder="상세 주소를 입력하세요" />
              <Input type="text" placeholder="받는 사람" />
              <Input type="text" placeholder="전화번호" />
            </div>
            <div css={buttonWrapper}>
              <Button size="xl" onClick={handleSave}>
                이 주소가 확실해요
              </Button>
            </div>
          </div>
        )}
      </div>
      {isDialogOpen && (
        <Dialog
          type="action"
          title="등록 완료"
          description="주소가 입력됐어요"
          primaryActionLabel="확인"
          secondaryActionLabel="취소"
          onPrimaryAction={handleDialogConfirm} // Dialog의 확인 버튼을 클릭 시 동작
          onSecondaryAction={handleDialogConfirm}
        />
      )}
    </div>
  );
};

export default AddressForm;
