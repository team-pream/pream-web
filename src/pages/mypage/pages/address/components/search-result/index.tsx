import React from 'react';
import { searchResultWrapper, searchTitle, resultAddress, addressTag } from './index.style';
const SearchResult: React.FC = () => {
  return (
    <div css={searchResultWrapper}>
      <div css={searchTitle}></div>
      <div>
        <div css={addressTag}></div>
        <div css={resultAddress}></div>
      </div>
    </div>
  );
};
export default SearchResult;
