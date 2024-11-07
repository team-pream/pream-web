import { Text } from '@/components';
import { radioButtonWrapper, customCheckbox, customCheckboxInner, wrapper } from './index.styles';

interface Props {
  isChecked: boolean;
  onChange: () => void;
}

export default function Checkbox({ isChecked, onChange }: Props) {
  return (
    <div css={wrapper}>
      <Text typo="subtitle1">배송 주소</Text>
      <div css={radioButtonWrapper} onClick={onChange}>
        <input type="checkbox" checked={isChecked} readOnly />
        <div css={customCheckbox}>
          <div css={customCheckboxInner({ isChecked })}></div>
        </div>
        <Text typo="body3">기본 배송지로 등록</Text>
      </div>
    </div>
  );
}
