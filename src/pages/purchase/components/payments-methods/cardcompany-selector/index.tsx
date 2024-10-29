import React, { useState } from 'react';
import { DropdownFold } from '@/assets/icons';
import { DropdownUnfold } from '@/assets/icons';
import {
  selecterWrapper,
  selectWrapper,
  arrowIcon,
  optionActive,
  optionDisabled,
} from './index.styles';
import { colors } from '@/styles/colors';

interface CardCompanys {
  id: string;
  name: string;
}

interface CardCompanySelectorProps {
  provider: CardCompanys[];
  seletedCompanyId: string;
  onCompanyChange: (id: string) => void;
}

const CardCompanySelector: React.FC<CardCompanySelectorProps> = ({
  provider,
  seletedCompanyId,
  onCompanyChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleBlur = () => {
    setTimeout(() => setIsOpen(false), 100);
  };

  const isSelected = seletedCompanyId !== ''; // 선택 여부 확인

  return (
    <div css={selectWrapper}>
      <select
        id="card-company"
        value={seletedCompanyId}
        onClick={handleSelectClick}
        onChange={(e) => {
          onCompanyChange(e.target.value);
          setIsOpen(false);
        }}
        onBlur={handleBlur}
        css={selecterWrapper(isSelected)} // 선택 여부에 따른 스타일 적용
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
