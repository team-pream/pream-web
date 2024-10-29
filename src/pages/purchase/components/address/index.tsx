import { Input } from '@/components/input';
import { addressWrapper } from './index.styles';
import SelectBasic from './select-default';
import { colors } from '@/styles/colors';

const AddAddress: React.FC = () => {
  return (
    <div css={addressWrapper}>
      <SelectBasic />
      <Input label="이름" placeholder="이름을 입력해주세요" />
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <Input label="배송지" placeholder="주소를 입력해주세요" />
        <div
          css={{
            backgroundColor: colors.green200,
            fontSize: '12px',
            color: 'white',
            display: 'flex',
            boxSizing: 'border-box',
            width: '100px',
            height: '30px',
            padding: '10px',
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center',
            marginTop: '27px',
            borderRadius: '3px',
            cursor: 'pointer',
          }}
        >
          주소 검색
        </div>
      </div>
      <Input placeholder="상세주소를 입력해주세요" />
      <Input label="연락처" placeholder="연락처를 입력해주세요" />
    </div>
  );
};
export default AddAddress;
