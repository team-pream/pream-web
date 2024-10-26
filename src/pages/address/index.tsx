import React from 'react';
import { Wrapper, Contents, Footer, Header } from '../detail/index.styles';
import SvgAppbarBack from '@/assets/icons/AppbarBack';
import AddressSearchBar from './components/addAddress';
import Button from './components/button';

const Address: React.FC = () => {
  const handleSelectAddress = (road: string, jibun: string) => {
    console.log(`도로명: ${road}, 지번: ${jibun}`);
  };

  return (
    <div css={Wrapper}>
      <div css={Header}>
        <SvgAppbarBack css={{ width: '7px', height: '14px', cursor: 'pointer' }} />
        이것이 헤더
      </div>
      <div css={Contents}>
        <AddressSearchBar onSelectAddress={handleSelectAddress} />
      </div>
      <Button>다음</Button>
      <div css={Footer}>이것이 푸터</div>
    </div>
  );
};

export default Address;
