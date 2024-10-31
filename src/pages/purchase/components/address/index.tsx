import { Input } from '@/components/input';
import { addressWrapper, addressBtn } from './index.styles';
import SelectBasic from './select-default';
import { useNavigate } from 'react-router-dom';
const AddAddress = () => {
  const navigate = useNavigate();

  const handleAddress = () => {
    navigate('/address');
  };
  return (
    <div css={addressWrapper}>
      <SelectBasic />
      <Input label="이름" placeholder="이름을 입력해주세요" />
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <Input label="배송지" placeholder="주소를 입력해주세요" />
        <div onClick={handleAddress} css={addressBtn}>
          주소 검색
        </div>
      </div>
      <Input placeholder="상세주소를 입력해주세요" />
      <Input label="연락처" placeholder="연락처를 입력해주세요" />
    </div>
  );
};
export default AddAddress;
