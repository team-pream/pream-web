import { colors } from '@/styles/colors';
import { radioButtonWrapper, customCheckbox, customCheckboxInner } from './index.styles';
import { useState } from 'react';
import { Text } from '@/components';

const SelectBasic = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div css={{ display: 'flex', justifyContent: 'space-between' }}>
      <Text typo="subtitle1">배송 주소</Text>
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
        <Text typo="body3">기본 배송지로 등록</Text>
      </div>
    </div>
  );
};

export default SelectBasic;
