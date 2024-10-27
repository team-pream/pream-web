import React, { useState, useEffect } from 'react';
import SearchBar from '../search-bar';
import KakaoMap from '../map';
import axios from 'axios';
import { resultAddress, addressTag, inputStyle, searchResultWrapper } from './index.style';
import Button from '../button';
import Modal from '../modal';

interface AddressData {
  roadAddress: string;
  jibunAddress: string;
  zonecode: string;
  buildingName?: string;
}

interface AddressSearchBarProps {
  onSearchStart: () => void;
  onDetailInputStart: () => void;
}

const AddressSearchBar: React.FC<AddressSearchBarProps> = ({
  onSearchStart,
  onDetailInputStart,
}) => {
  const [roadAddress, setRoadAddress] = useState('');
  const [jibunAddress, setJibunAddress] = useState('');
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [showDetailInput, setShowDetailInput] = useState(false);
  const [detailAddress, setDetailAddress] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    onSearchStart(); // 검색 시작 시 AddressList 표시

    new window.daum.Postcode({
      oncomplete: async (data: AddressData) => {
        const buildingName = data.buildingName ? ` (${data.buildingName})` : '';
        setRoadAddress(data.roadAddress + buildingName);
        setJibunAddress(data.jibunAddress);
        setShowDetailInput(true);
        onDetailInputStart(); // 상세 입력 시작 시 AddressList 숨기기


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

  const handleSaveAddress = () => {
    const newAddress = {
      roadAddress: roadAddress,
      detailAddress: detailAddress,
    };

    const storedAddresses = sessionStorage.getItem('savedAddresses');
    const parsedAddresses = storedAddresses ? JSON.parse(storedAddresses) : [];

    const updatedAddresses = [...parsedAddresses, newAddress];
    sessionStorage.setItem('savedAddresses', JSON.stringify(updatedAddresses));

    console.log('SessionStorage에 저장된 주소 목록:', updatedAddresses);

    setIsModalOpen(true);
  };

  return (
    <div css={searchResultWrapper}>
      <SearchBar
        onSearch={handlePostcodeSearch}
        placeholder={roadAddress || '도로명이나 주소를 입력하세요'}
      />

      {latitude !== null && longitude !== null && (
        <KakaoMap latitude={latitude} longitude={longitude} />
      )}

      {roadAddress && (
        <div css={resultAddress}>
          <div css={addressTag}>도로명</div>
          <div css={{ fontWeight: '600' }}>{roadAddress}</div>
        </div>
      )}

      {jibunAddress && (
        <div css={resultAddress}>
          <div css={addressTag}>지번</div>
          <div>{jibunAddress}</div>
        </div>
      )}

      {showDetailInput && (
        <div style={{ paddingBottom: '10px' }}>
          <div css={inputStyle(detailAddress.trim().length > 0)} tabIndex={-1}>
            <input
              type="text"
              placeholder="상세 주소를 입력하세요"
              onChange={(e) => setDetailAddress(e.target.value)}
            />
          </div>
          <Button onClick={handleSaveAddress}>이 주소가 확실해요</Button>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="등록 완료"
        message="주소가 입력됐어요"
        buttonText="확인"
      />
    </div>
  );
};

export default AddressSearchBar;
