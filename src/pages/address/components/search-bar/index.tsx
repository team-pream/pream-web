import React, { useState } from 'react';
import { Search } from '@/assets/icons';
import { searchbarWrapper } from './index.style';
// interface SearchBarProps {
//   onSelectAddress: (address: string) => void;
// }
const SearchBar: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div
      css={searchbarWrapper(isFocused)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      tabIndex={-1}
    >
      <input />
      <Search css={{ width: '20px', margin: '10px', cursor: 'pointer' }} />
    </div>
  );
};

export default SearchBar;
