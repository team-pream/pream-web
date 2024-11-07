import { useRef, useState } from 'react';
import { Search } from '@/assets/icons';
import { searchBarWrapper, searchIconStyle } from './index.styles';

interface SearchBarProps {
  onSearch: () => void;
  placeholder?: string; // Placeholder 텍스트를 설정 가능하도록
}

const SearchBar = ({ onSearch, placeholder = '도로명이나 주소를 입력하세요' }: SearchBarProps) => {
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
      <input ref={inputRef} placeholder={placeholder} readOnly />
      <Search css={searchIconStyle} />
    </div>
  );
};

export default SearchBar;
