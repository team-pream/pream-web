import React from 'react';
import { searchResultWrapper, searchTitle, resultAddress, addressTag } from './index.style';
const SearchResult: React.FC = () => {
  return (
    <div css={searchResultWrapper}>
      <div css={searchTitle}>주소를 검색했습니다.</div>
      <div css={{ display: 'flex' }}>
        <div css={addressTag}>도로명</div>
        <div css={resultAddress}>주소입니다. 주소요</div>
      </div>
      <div css={{ display: 'flex' }}>
        <div css={addressTag}>도로명</div>
        <div css={resultAddress}>주소입니다. 주소요</div>
      </div>
      <div css={{ display: 'flex' }}>
        <div css={addressTag}>도로명</div>
        <div css={resultAddress}>주소입니다. 주소요</div>
      </div>
    </div>
  );
};
export default SearchResult;
