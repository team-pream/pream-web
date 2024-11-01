import { addressListWrapper, addressWrapper, defaultAddressTag, tagStyle } from './index.styles';
import { Text } from '@/components';
import { colors } from '@/styles/colors';

interface addressListProps {
  address: string;
  // onEditClick: () => void;
}
const AddressList = ({ address }: addressListProps) => {
  return (
    <div>
      {address.length === 0 ? (
        <div css={addressListWrapper}>
          <div>등록된 주소가 없습니다.</div>
        </div>
      ) : (
        <div css={addressWrapper}>
          <div css={{ display: 'flex', justifyContent: 'space-between' }}>
            <div css={{ display: 'flex', gap: '9px' }}>
              <Text typo="subtitle2">홍길동</Text>
              <div css={defaultAddressTag}>
                <Text typo="body3">기본 배송지</Text>
              </div>
            </div>
            <div
              css={{
                cursor: 'pointer',
                display: 'flex',
                color: `${colors.green300}`,
              }}
            >
              <Text typo="body3">변경</Text>
            </div>
          </div>

          <div css={{ display: 'flex', margin: '6px 0 8px' }}>
            <div css={tagStyle}>
              <Text typo="body3">주소</Text>
            </div>
            <div css={{ display: 'flex', justifyContent: 'space-between' }}>
              <div css={{ display: 'flex', flexDirection: 'column', gap: '2px', width: '315px' }}>
                <Text typo="body5">서울특별시 강남구 선릉로 428 멀티캠퍼스</Text>
                <Text typo="body5">4층 402호</Text>
              </div>
            </div>
          </div>
          <div css={{ display: 'flex' }}>
            <div css={tagStyle}>
              <Text typo="body3">휴대폰</Text>
            </div>

            <div css={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '2px' }}>
              <Text typo="body5">01012345678</Text>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default AddressList;
