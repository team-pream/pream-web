import {
  Wrapper,
  Header,
  TitleWrapper,
  OptionIcon,
  TitleTop,
  Title,
  Footer,
  TitleBottom,
  InfoWrapper,
  InfoTitle,
  InfoValue,
  Contents,
} from './index.styles';
import Carousel from './components/Carousel';
import option from '../../assets/icons/option.svg';
export default function Detail() {
  return (
    <div css={Wrapper}>
      <div css={Header}>헤더입니더</div>
      <div css={Contents}>
        <Carousel />
        <div css={TitleWrapper}>
          <div css={TitleTop}>
            <div css={Title}>파는건 아니고 우리 고양이 사진보러...</div>
            <img src={option} css={OptionIcon} />
          </div>
          <div css={TitleBottom}>99,999원</div>
        </div>
        <div css={InfoWrapper}>
          <div css={{ display: 'flex', flexDirection: 'row', marginBottom: '5px' }}>
            <div css={InfoTitle}>판매자</div>
            <div css={InfoValue}>판매자</div>
          </div>
          <div css={{ display: 'flex', flexDirection: 'row', marginBottom: '5px' }}>
            <div css={InfoTitle}>상태</div>
            <div css={InfoValue}>사용감 없음</div>
          </div>
          <div css={{ display: 'flex', flexDirection: 'row', marginBottom: '5px' }}>
            <div css={InfoTitle}>오픈채팅</div>
            <div css={InfoValue}>https://open.kakao.com/o/sn7a8Y</div>
          </div>
          <div css={{ color: '#AEAEAE', margin: '20px 0px' }}>
            <span>10분전</span>
            <span css={{ margin: '10px', fontSize: '8px' }}>•</span>
            <span>찜 0</span>
          </div>
        </div>
        <div css={{ width: '100%', borderBottom: '4px solid #F6F6F6' }}></div>
      </div>
      <div css={Footer}>
        <div>푸터입니다.</div>
      </div>
    </div>
  );
}
