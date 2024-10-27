import React, { useEffect, useState } from 'react';
import { addressListWrapper, defaultAddressTag, addressTag2, resultAddress2 } from './index.style';

interface AddressObject {
  roadAddress: string;
  detailAddress: string;
}

const AddressList: React.FC = () => {
  const [savedAddresses, setSavedAddresses] = useState<AddressObject[]>([]);

  // sessionStorage에서 저장된 주소 불러오기
  useEffect(() => {
    const storedAddresses = sessionStorage.getItem('savedAddresses');
    const parsedAddresses = storedAddresses ? JSON.parse(storedAddresses) : [];
    setSavedAddresses(parsedAddresses);
  }, []);

  // 클릭 시 해당 주소를 맨 앞으로 이동
  const handleAddressClick = (index: number) => {
    const selectedAddress = savedAddresses[index];
    const updatedAddresses = [selectedAddress, ...savedAddresses.filter((_, i) => i !== index)];
    setSavedAddresses(updatedAddresses);
    sessionStorage.setItem('savedAddresses', JSON.stringify(updatedAddresses));
  };

  return (
    <div>
      {savedAddresses.length > 0 ? (
        savedAddresses.map((address, index) => (
          <div
            key={index}
            css={addressListWrapper}
            onClick={() => handleAddressClick(index)}
            style={{ cursor: 'pointer' }}
          >
            {index === 0 && (
              <div css={defaultAddressTag}>기본 배송지</div> // index가 0일 때 표시
            )}
            <div css={{ display: 'flex' }}>
              <div css={addressTag2}>주소</div>
              <div>
                <div css={resultAddress2}>{address.roadAddress}</div>
                <div css={resultAddress2}>{address.detailAddress}</div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>저장된 주소가 없습니다.</div>
      )}
    </div>
  );
};

export default AddressList;
