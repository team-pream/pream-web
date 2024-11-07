import {
  addressListWrapper,
  wrapper,
  addressHeaderWrapper,
  defaultAddressTag,
  tagStyle,
  modifyButtonStyle,
  valueWrapper,
  tagValueWrapper,
  totalAddressWrapper,
} from './index.styles';
import { Text } from '@/components';
import { PatchUsersAddressBody } from '@/types';
import { EmotionalPetIcon } from '@/assets/icons';
import { formatPhoneNumber } from '@/utils/format';

interface AddressListProps {
  userData: {
    address: PatchUsersAddressBody;
    username: string;
    phone: string;
  } | null;
  onEditClick: () => void;
}

const AddressList = ({ userData, onEditClick }: AddressListProps) => {
  return (
    <div>
      {userData ? (
        <div css={addressListWrapper}>
          <div css={addressHeaderWrapper}>
            <div css={tagValueWrapper}>
              <Text typo="subtitle2">{userData.username}</Text>
              <div css={defaultAddressTag}>
                <Text typo="body3">기본 배송지</Text>
              </div>
            </div>
            <div css={modifyButtonStyle} onClick={onEditClick}>
              <Text typo="body3">변경</Text>
            </div>
          </div>
          <div css={tagValueWrapper}>
            <div css={tagStyle}>
              <Text typo="body3">주소</Text>
            </div>
            <div css={totalAddressWrapper}>
              <div css={valueWrapper}>
                <Text typo="body5">{userData.address.roadAddress || '주소 없음'}</Text>
                <Text typo="body5">{userData.address.detailAddress || '상세 주소 없음'}</Text>
              </div>
            </div>
          </div>
          <div css={tagValueWrapper}>
            <div css={tagStyle}>
              <Text typo="body3">휴대폰</Text>
            </div>
            <div css={valueWrapper}>
              <Text typo="body5">{formatPhoneNumber(userData.phone) || '연락처 없음'}</Text>
            </div>
          </div>
        </div>
      ) : (
        <div css={wrapper}>
          <EmotionalPetIcon width="67px" />
          <Text typo="body2">등록된 주소가 없어요</Text>
        </div>
      )}
    </div>
  );
};

export default AddressList;
