import { useEffect, useState } from 'react';
import SearchBar from './components/search-bar';
import KakaoMap from './components/map';
import axios from 'axios';
import { Dialog, Text, Input, Button } from '@/components';
import {
  containTagWrapper,
  addressFormWrapper,
  defaultWrapper,
  buttonWrapper,
  formTagStyle,
} from './insex.styles';
import { patchUsersAddress } from '@/api';

interface AddressData {
  roadAddress: string;
  detailAddress: string;
  jibunAddress: string;
  zonecode: string;
  buildingName?: string;
}

interface AddressFormProps {
  onSave: () => void;
  initialData?: AddressData;
}

const AddressForm = ({ onSave, initialData }: AddressFormProps) => {
  const [roadAddress, setRoadAddress] = useState(initialData?.roadAddress || '');
  const [jibunAddress, setJibunAddress] = useState(initialData?.jibunAddress || '');
  const [zonecode, setZoneCode] = useState(initialData?.zonecode || '');
  const [detailAddress, setDetailAddress] = useState(initialData?.detailAddress || '');
  const [errorMessage, setErrorMessage] = useState<string>(''); // errorMessage 상태 추가
  const [showDetailInput, setShowDetailInput] = useState(!!initialData);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [mapCoordinates, setMapCoordinates] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (roadAddress) {
      fetchCoordinates(roadAddress);
    }
  }, [roadAddress]);

  const fetchCoordinates = async (address: string) => {
    try {
      const response = await axios.get(
        `https://dapi.kakao.com/v2/local/search/address.json?query=${address}`,
        {
          headers: { Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_API_KEY}` },
        }
      );

      if (response.data.documents.length > 0) {
        const { x, y } = response.data.documents[0].address;
        setMapCoordinates({ latitude: parseFloat(y), longitude: parseFloat(x) });
      }
    } catch (error) {
      console.error('Error fetching coordinates:', error);
    }
  };

  const handlePostcodeSearch = () => {
    new window.daum.Postcode({
      oncomplete: (data: AddressData) => {
        const buildingName = data.buildingName || '';
        setRoadAddress(data.roadAddress + buildingName);
        setJibunAddress(data.jibunAddress);
        setZoneCode(data.zonecode);
        setShowDetailInput(true);
        fetchCoordinates(data.roadAddress);
      },
    }).open();
  };

  const handleMarkerDragEnd = async (lat: number, lng: number) => {
    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.coord2Address(lng, lat, (result, status) => {
      if (status === window.kakao.maps.services.Status.OK && result[0]) {
        const roadAddress = result[0].road_address?.address_name || '';
        const jibunAddress = result[0].address?.address_name || '';
        setRoadAddress(roadAddress);
        setJibunAddress(jibunAddress);
        setMapCoordinates({ latitude: lat, longitude: lng });
      }
    });
  };

  const validateDetailAddress = (value: string) => {
    if (!value) {
      return '상세 주소를 입력해 주세요.';
    } else if (value.length > 30) {
      return '상세 주소는 30자 이하여야 합니다.';
    } else {
      return '';
    }
  };

  const handleDetailAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDetailAddress(value);
    setErrorMessage(validateDetailAddress(value)); // 실시간 유효성 검사
  };

  const handleSave = () => {
    if (!errorMessage) {
      setIsDialogOpen(true);
    }
  };

  const handleDialogConfirm = async () => {
    try {
      const addressData = {
        roadAddress,
        detailAddress,
        jibunAddress,
        zonecode,
      };

      setIsDialogOpen(false);
      await patchUsersAddress(addressData);
      onSave();
    } catch (error) {
      console.error('Failed to update address:', error);
      alert('주소 수정에 실패했습니다.');
    }
  };

  return (
    <div css={addressFormWrapper}>
      <div css={defaultWrapper}>
        <SearchBar
          onSearch={handlePostcodeSearch}
          placeholder={roadAddress || '도로명이나 주소를 입력하세요'}
        />
      </div>
      {mapCoordinates && (
        <KakaoMap
          latitude={mapCoordinates.latitude}
          longitude={mapCoordinates.longitude}
          onMarkerDragEnd={handleMarkerDragEnd}
        />
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
          <>
            <div css={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Input
                type="text"
                placeholder="상세 주소를 입력하세요"
                value={detailAddress}
                maxLength={30} // 30자로 입력 제한
                errorMessage={errorMessage}
                onChange={handleDetailAddressChange} // 실시간 유효성 검사 핸들러
                onBlur={() => setErrorMessage(validateDetailAddress(detailAddress))}
              />
            </div>
            <div css={buttonWrapper}>
              <Button size="xl" onClick={handleSave}>
                이 주소가 확실해요
              </Button>
            </div>
          </>
        )}
      </div>
      {isDialogOpen && (
        <Dialog
          type="action"
          title="등록 완료"
          description="주소가 입력됐어요"
          primaryActionLabel="확인"
          secondaryActionLabel="취소"
          onPrimaryAction={handleDialogConfirm}
          onSecondaryAction={() => setIsDialogOpen(false)}
        />
      )}
    </div>
  );
};

export default AddressForm;
