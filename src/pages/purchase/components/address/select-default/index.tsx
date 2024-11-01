import { colors } from '@/styles/colors';
import { radioButtonWrapper, title, customCheckbox, customCheckboxInner } from './index.styles';
import { useState } from 'react';

const SelectBasic: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div css={{ display: 'flex', justifyContent: 'space-between' }}>
      <div css={title}>배송주소</div>
      <div css={radioButtonWrapper} onClick={handleCheckboxChange}>
        <input type="checkbox" style={{ display: 'none' }} checked={isChecked} readOnly />
        <div css={customCheckbox}>
          <div
            css={customCheckboxInner}
            style={{
              backgroundColor: isChecked ? colors.green200 : colors.gray100, // 조건부로 배경색 변경
            }}
          ></div>
        </div>
        <span>기본 배송지로 등록</span>
      </div>
    </div>
  );
};

export default SelectBasic;
