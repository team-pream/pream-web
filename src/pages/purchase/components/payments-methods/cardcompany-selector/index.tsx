import React, { useState } from 'react';
import {
  selecterWrapper,
  selectWrapper,
  arrowIcon,
  optionActive,
  optionDisabled,
} from './index.styles';
import { DropdownFold, DropdownUnfold } from '@/assets/icons';
import { colors } from '@/styles/colors';
interface CardCompanys {}

interface CardCompanySelectorProps {
  provider: CardCompanys[];
  seletedCompanyId: string;
  onCompanyChange: (id: string) => void;
  disabled: boolean;
}

const CardCompanySelector: React.FC<CardCompanySelectorProps> = ({
  provider,
  seletedCompanyId,
  onCompanyChange,
  disabled,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectClick = () => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
    }
  };

  const handleBlur = () => {
    setTimeout(() => setIsOpen(false), 100);
  };

  const isSelected = seletedCompanyId !== ''; // 선택 여부 확인

  return (
    <div css={selectWrapper}>
      <select
        id="card-company"
        value={seletedCompanyId} // 선택된 카드사 표시
        onClick={handleSelectClick}
        onChange={(e) => onCompanyChange(e.target.value)} // 카드사 선택 업데이트
        onBlur={handleBlur}
        css={selecterWrapper(isSelected)} // 스타일 적용
        disabled={disabled} // 비활성화 여부 제어
      >
        <option value="" css={optionDisabled}>
          카드사를 선택하세요
        </option>
        {provider.map((company) => (
          <option key={company.id} value={company.id} css={optionActive}>
            {company.name}
          </option>
        ))}
      </select>
      <div css={arrowIcon}>
        {isOpen ? (
          <DropdownUnfold width="12px" stroke={colors.gray200} />
        ) : (
          <DropdownFold width="12px" stroke={colors.gray200} />
        )}
      </div>
    </div>
  );
};

export default CardCompanySelector;
