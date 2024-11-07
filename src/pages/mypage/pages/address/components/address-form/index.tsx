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
  inputDetailWrapper,
} from './insex.styles';
import { usePatchUsersAddressMutation } from '@/queries';

interface AddressData {
  roadAddress: string;
  detailAddress: string;
  jibunAddress: string;
  zonecode: string;
  buildingName?: string;
}

interface AddressFormProps {
  onSave: (newDetailAddress: string) => void;
  initialData?: AddressData;
}

const AddressForm = ({ onSave, initialData }: AddressFormProps) => {
  const [roadAddress, setRoadAddress] = useState(initialData?.roadAddress || '');
  const [jibunAddress, setJibunAddress] = useState(initialData?.jibunAddress || '');
  const [detailAddress, setDetailAddress] = useState(initialData?.detailAddress || '');
  const [previousDetailAddress] = useState(initialData?.detailAddress || '');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [showDetailInput, setShowDetailInput] = useState(!!initialData);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [errorDialog, setErrorDialog] = useState(false);
  const [mapCoordinates, setMapCoordinates] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const { mutateAsync: patchUsersAddress, isError } = usePatchUsersAddressMutation();

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

  useEffect(() => {
    if (jibunAddress !== initialData?.jibunAddress || detailAddress !== previousDetailAddress) {
      setErrorMessage('');
    }
  }, [jibunAddress, roadAddress, detailAddress, previousDetailAddress, initialData?.jibunAddress]);

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
        setShowDetailInput(true);
        fetchCoordinates(data.roadAddress);
      },
    }).open();
  };

  const handleMarkerDragEnd = async (lat: number, lng: number) => {
    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.coord2Address(lng, lat, (result, status) => {
      if (status === window.kakao.maps.services.Status.OK && result[0]) {
        let roadAddress = result[0].road_address?.address_name || '';
        const jibunAddress = result[0].address?.address_name || '';
        if (!roadAddress) {
          roadAddress = jibunAddress;
        }
        setRoadAddress(roadAddress);
        setJibunAddress(jibunAddress);
        setMapCoordinates({ latitude: lat, longitude: lng });
      }
    });
  };

  const validateDetailAddress = (detail: string, jibun: string) => {
    if (!detail) {
      return '상세 주소를 입력해 주세요.';
    } else if (detail.length > 30) {
      return '상세 주소는 30자 이하여야 합니다.';
    } else if (detail === previousDetailAddress && jibun === initialData?.jibunAddress) {
      return '주소가 이전과 동일해요';
    } else {
      return '';
    }
  };

  const handleDetailAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.length <= 30) {
      setDetailAddress(value);
    }

    const validationMessage = validateDetailAddress(value, jibunAddress);
    setErrorMessage(validationMessage);
  };

  const handleSaveClick = () => {
    const validationMessage = validateDetailAddress(detailAddress, jibunAddress);
    if (!validationMessage) {
      setIsDialogOpen(true);
    } else {
      setErrorMessage(validationMessage);
    }
  };

  const handleDialogConfirm = async () => {
    try {
      await patchUsersAddress({
        roadAddress,
        detailAddress,
      });
      setIsDialogOpen(false);
      onSave(detailAddress);
    } catch {
      setErrorDialog(true);
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
            {roadAddress === jibunAddress ? (
              <Text typo="subtitle2">도로명 주소가 존재하지 않아요</Text>
            ) : (
              <Text typo="subtitle2">{roadAddress}</Text>
            )}
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
            <div css={inputDetailWrapper}>
              <Input
                type="text"
                placeholder="상세 주소를 입력하세요"
                value={detailAddress}
                maxLength={30}
                errorMessage={errorMessage}
                onChange={handleDetailAddressChange}
                onBlur={() => setErrorMessage(validateDetailAddress(detailAddress, jibunAddress))}
              />
            </div>
            <div css={buttonWrapper}>
              <Button size="xl" onClick={handleSaveClick}>
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
      {errorDialog && isError && (
        <Dialog
          type="error"
          title="주소 수정 실패"
          description="주소 수정에 실패했습니다. 다시 시도해 주세요."
          primaryActionLabel="확인"
          onPrimaryAction={() => setErrorDialog(false)}
        />
      )}
    </div>
  );
};

export default AddressForm;
