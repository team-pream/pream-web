import { Wrapper, Header, Contents, Footer } from '../detail/index.styles';
import SvgAppbarBack from '@/assets/icons/AppbarBack';
import SearchBar from './components/search-bar';
export default function Address() {
  return (
    <div css={Wrapper}>
      <div css={Header}>
        <SvgAppbarBack css={{ width: '7px', height: '14px', cursor: 'pointer' }} />
        이것이 헤더
      </div>
      <div css={Contents}>
        <SearchBar />
      </div>
      <div css={Footer}>이것이 푸터</div>
    </div>
  );
}
