// import React from 'react';
// import { searchResultWrapper, searchTitle, resultAddress, addressTag } from './index.style';

// interface SearchResultProps {
//   results: any[]; // 검색된 주소 목록
// }

// const SearchResult: React.FC<SearchResultProps> = ({ results }) => {
//   if (results.length === 0) {
//     return <div css={searchResultWrapper}>검색 결과가 없습니다.</div>;
//   }

//   return (
//     <div css={searchResultWrapper}>
//       <div css={searchTitle}>검색 결과</div>
//       {results.map((result, index) => (
//         <div key={index} css={{ display: 'flex', marginBottom: '8px', flexDirection: 'column' }}>
//           <div css={{ display: 'flex' }}>
//             <div css={addressTag}>도로명</div>
//             <div css={resultAddress}>
//               {result.road_address_name} {result.main_building_no}
//               {result.sub_building_no && `-${result.sub_building_no}`}
//             </div>
//           </div>
//           <div css={{ display: 'flex' }}>
//             <div css={addressTag}>지번</div>
//             <div css={resultAddress}>
//               {result.address_name}
//               {result.building_name && (
//                 <span css={{ marginLeft: '10px', fontWeight: 'bold' }}>{result.building_name}</span>
//               )}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SearchResult;
