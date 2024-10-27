import React, { useState, useEffect } from 'react';
import SearchBar from '../search-bar';
import KakaoMap from '../map';
import axios from 'axios';
import { resultAddress, addressTag, inputStyle } from './index.style';
import Button from '../button';
import Modal from '../modal';

interface AddressData {
  roadAddress: string;
  jibunAddress: string;
  zonecode: string;
  buildingName?: string;
}

interface AddressSearchBarProps {
  onSelectAddress: (road: string, jibun: string) => void;
}

export default function AddressSearchBar({ onSelectAddress }: AddressSearchBarProps) {
  const [postcode, setPostcode] = useState('');
  const [roadAddress, setRoadAddress] = useState('');
  const [jibunAddress, setJibunAddress] = useState('');
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [showDetailInput, setShowDetailInput] = useState(false);
  const [detailAddress, setDetailAddress] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

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
      oncomplete: async (data: AddressData) => {
        const buildingName = data.buildingName ? ` (${data.buildingName})` : '';
        setPostcode(data.zonecode);
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

  const handleDetailAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDetailAddress(value);
    setIsFocused(value.trim().length > 0);
  };

  const handleSaveAddress = () => {
    const fullAddress = `${roadAddress}, ${jibunAddress}, ${detailAddress}`;
    console.log('저장된 전체 주소:', fullAddress);
    setIsModalOpen(true);
  };

  return (
    <div style={{ padding: '16px' }}>
      <SearchBar
        onSearch={handlePostcodeSearch}
        placeholder={roadAddress || '도로명이나 주소를 입력하세요'}
      />

      {latitude !== null && longitude !== null && (
        <KakaoMap latitude={latitude} longitude={longitude} />
      )}

      {postcode && (
        <div css={resultAddress}>
          <div css={addressTag}>우편번호</div>
          <div>{postcode}</div>
        </div>
      )}

      {roadAddress && (
        <div css={resultAddress}>
          <div css={addressTag}>도로명</div>
          <div css={{ fontWeight: '600' }}>{roadAddress}</div>
        </div>
      )}

      {jibunAddress && (
        <div css={resultAddress}>
          <div css={addressTag}>지번 주소</div>
          <div>{jibunAddress}</div>
        </div>
      )}

      {showDetailInput && (
        <div style={{ paddingBottom: '10px' }}>
          <div
            css={inputStyle(isFocused || detailAddress.trim().length > 0)} // Conditional style
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              if (!detailAddress.trim()) setIsFocused(false); // Prevent blur if value exists
            }}
            tabIndex={-1}
          >
            <input
              type="text"
              placeholder="상세 주소를 입력하세요"
              onChange={handleDetailAddressChange}
            />
          </div>
          <Button onClick={handleSaveAddress}>이 주소가 확실해요</Button>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="등록 완료"
        message="기본 주소 입력이 완료됐어요"
        buttonText="확인"
      />
    </div>
  );
}
