import {
  addressListWrapper,
  addressWrapper,
  defaultAddressTag,
  tagStyle,
  modifyButtonStyle,
} from './index.styles';
import { Text } from '@/components';
import { PatchUserAddressResponse } from '@/types';

interface AddressListProps {
  userData: {
    address: PatchUserAddressResponse;
    username: string;
    phone: string;
  } | null;
  onEditClick: () => void;
}

const AddressList = ({ userData, onEditClick }: AddressListProps) => {
  return (
    <div>
      {userData ? (
        <div css={addressWrapper}>
          <div css={{ display: 'flex', justifyContent: 'space-between' }}>
            <div css={{ display: 'flex', gap: '9px' }}>
              <Text typo="subtitle2">{userData.username}</Text>
              <div css={defaultAddressTag}>
                <Text typo="body3">기본 배송지</Text>
              </div>
            </div>
            <div css={modifyButtonStyle} onClick={onEditClick}>
              <Text typo="body3">변경</Text>
            </div>
          </div>
          <div css={{ display: 'flex', margin: '6px 0 8px' }}>
            <div css={tagStyle}>
              <Text typo="body3">주소</Text>
            </div>
            <div css={{ display: 'flex', justifyContent: 'space-between' }}>
              <div css={{ display: 'flex', flexDirection: 'column', gap: '2px', width: '315px' }}>
                <Text typo="body5">{userData.address.roadAddress || '주소 없음'}</Text>
                <Text typo="body5">{userData.address.detailAddress || '상세 주소 없음'}</Text>
              </div>
            </div>
          </div>
          <div css={{ display: 'flex' }}>
            <div css={tagStyle}>
              <Text typo="body3">휴대폰</Text>
            </div>
            <div css={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '2px' }}>
              <Text typo="body5">{userData.phone || '연락처 없음'}</Text>
            </div>
          </div>
        </div>
      ) : (
        <div css={addressListWrapper}>
          <div>등록된 주소가 없습니다.</div>
        </div>
      )}
    </div>
  );
};

export default AddressList;
