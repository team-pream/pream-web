import { useEffect, useState } from 'react';
import SearchBar from './components/search-bar';
import KakaoMap from './components/map';
import axios from 'axios';
import { Dialog } from '@/components';
import { Text } from '@/components';
import {
  containTagWrapper,
  addressFormWrapper,
  defaultWrapper,
  buttonWrapper,
  formTagStyle,
} from './insex.styles';
import { Input, Button } from '@/components';
import { patchUserAddress } from '@/api';

interface AddressData {
  roadAddress: string;
  detailAddress: string;
  jibunAddress: string;
  zonecode: string;
  buildingName: string;
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

  // roadAddress 변경 시 좌표를 가져와 지도에 반영
  useEffect(() => {
    if (roadAddress) {
      fetchCoordinates(roadAddress);
    }
  }, [roadAddress]);

  // 주소를 입력받아 좌표로 변환
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

  // 주소 검색 창 열기
  const handlePostcodeSearch = () => {
    new window.daum.Postcode({
      oncomplete: (data: AddressData) => {
        const buildingName = data.buildingName ? ` (${data.buildingName})` : '';
        setRoadAddress(data.roadAddress + buildingName);
        setJibunAddress(data.jibunAddress);
        setZoneCode(data.zonecode);
        setShowDetailInput(true);
        fetchCoordinates(data.roadAddress); // 검색 결과 좌표 가져오기
      },
    }).open();
  };

  // 마커가 드래그된 후 주소 업데이트
  const handleMarkerDragEnd = async (lat: number, lng: number) => {
    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.coord2Address(lng, lat, (result, status) => {
      if (status === window.kakao.maps.services.Status.OK && result[0]) {
        const roadAddress = result[0].road_address?.address_name || ''; // 도로명 주소
        const jibunAddress = result[0].address?.address_name || ''; // 지번 주소

        setRoadAddress(roadAddress);
        setJibunAddress(jibunAddress);
        setMapCoordinates({ latitude: lat, longitude: lng });
      }
    });
  };
  const handleSave = () => {
    setIsDialogOpen(true);
  };
  // 주소 저장
  const handleDialogConfirm = async () => {
    try {
      const addressData = {
        roadAddress,
        detailAddress,
        jibunAddress,
        zonecode,
      };

      // API 호출하여 주소 업데이트
      setIsDialogOpen(false);
      await patchUserAddress(addressData); // 서버에 주소 업데이트
      onSave(); // 성공 시 콜백 호출
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
                onChange={(e) => setDetailAddress(e.target.value)}
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
          onPrimaryAction={handleDialogConfirm} // Dialog의 확인 버튼을 클릭 시 동작
          onSecondaryAction={handleDialogConfirm}
        />
      )}
    </div>
  );
};

export default AddressForm;
