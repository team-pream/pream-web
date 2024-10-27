import React, { useEffect, useState } from 'react';
import { addressListWrapper, defaultAddressTag, addressTag2, resultAddress2 } from './index.style';

interface AddressObject {
  roadAddress: string;
  detailAddress: string;
}

const AddressList: React.FC = () => {
  const [savedAddresses, setSavedAddresses] = useState<AddressObject[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setIsModalOpen(true);
    setSavedAddresses(updatedAddresses);
    sessionStorage.setItem('savedAddresses', JSON.stringify(updatedAddresses));
  };

  // 주소 삭제 기능 구현
  const handleDeleteClick = (index: number) => {
    const updatedAddresses = savedAddresses.filter((_, i) => i !== index);
    setSavedAddresses(updatedAddresses);
    sessionStorage.setItem('savedAddresses', JSON.stringify(updatedAddresses));
  };

  return (
    <div>
      {savedAddresses.length > 0 ? (
        savedAddresses.map((address, index) => (
          <div key={index} css={addressListWrapper}>
            {index === 0 && (
              <div css={defaultAddressTag}>기본 배송지</div> // index가 0일 때 표시
            )}
            <div css={{ display: 'flex', justifyContent: 'space-between' }}>
              <div css={addressTag2}>주소</div>
              <div>
                <div css={resultAddress2}>{address.roadAddress}</div>
                <div css={resultAddress2}>{address.detailAddress}</div>
              </div>
              <img
                src={Delete}
                css={{ width: '10px', height: '10px', margin: 'auto', cursor: 'pointer' }}
                onClick={() => handleDeleteClick(index)} // 삭제 버튼 클릭 이벤트 추가
              />
            </div>
          </div>
        ))
      ) : (
        <div css={emptyMessageWrapper}>저장된 주소가 없습니다</div>
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="등록 완료"
        message="기본 주소지로 등록됐어요"
        buttonText="확인"
      />
    </div>
  );
};

export default AddressList;
