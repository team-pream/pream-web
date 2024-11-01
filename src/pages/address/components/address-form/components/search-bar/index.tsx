import React, { useRef, useState } from 'react';
import { Search } from '@/assets/icons';
import { searchBarWrapper } from './index.style';

interface SearchBarProps {
  onSearch: () => void;
  placeholder?: string; // Placeholder 텍스트를 설정 가능하도록
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = '도로명이나 주소를 입력하세요',
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
    onSearch(); // 주소 검색 실행
  };

  return (
    <div
      css={searchBarWrapper(isFocused)}
      tabIndex={-1}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onClick={handleClick}
    >
      <input
        ref={inputRef}
        placeholder={placeholder}
        style={{ flex: 1, border: 'none', outline: 'none' }}
        readOnly
      />
      <Search css={{ width: '20px', margin: '10px', cursor: 'pointer' }} />
    </div>
  );
};

export default SearchBar;
