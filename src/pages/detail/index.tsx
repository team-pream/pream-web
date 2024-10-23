import { useState } from 'react';
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
import { SheetList } from './components/BottomSheet.tsx';
import { useNavigate } from 'react-router-dom';
import Carousel from './components/carousel/index.tsx';
import option from '../../assets/icons/option.svg';
import theme from '@/styles/theme';
import SvgAppbarBack from '@/assets/icons/AppbarBack';
import BottomSheet from './components/BottomSheet.tsx';
export default function Detail() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleOptionClick = () => setIsSheetOpen(true);
  const handleCloseSheet = () => setIsSheetOpen(false);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <div css={Wrapper}>
      <div css={Header}>
        <SvgAppbarBack
          onClick={handleBackClick}
          css={{ width: '7px', height: '14px', cursor: 'pointer' }}
        />
      </div>
      <div css={Contents}>
        <Carousel />
        <div css={TitleWrapper}>
          <div css={TitleTop}>
            <div css={Title}>파는건 아니고 우리 고양이 사진보러...</div>
            <img onClick={handleOptionClick} src={option} css={OptionIcon} />
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
          <div css={{ color: `${theme.colors.gray200}`, margin: '20px 0px' }}>
            <span>10분전</span>
            <span css={{ margin: '10px', fontSize: '8px' }}>•</span>
            <span>찜 0</span>
          </div>
        </div>
        <div css={{ width: '100%', borderBottom: '4px solid #F6F6F6' }}></div>
        <div css={TitleWrapper}>
          <div css={Title}>상세설명</div>
          <div css={{ fontSize: '12px', marginTop: '28px', whiteSpace: 'pre-line' }}>
            어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구
            저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구
            저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구 어쩌구 저쩌구어쩌구
            저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구
            저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구
            저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구 어쩌구 저쩌구어쩌구 저쩌구어쩌구
            저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구
            저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구
            저쩌구어쩌구 저쩌구어쩌구 저쩌구 어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구
            저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구
            저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구
            저쩌구어쩌구 저쩌구
          </div>
        </div>
      </div>
      <div css={Footer}>
        <div>푸터입니다.</div>
      </div>
      <BottomSheet isOpen={isSheetOpen} onClose={handleCloseSheet}>
        <div css={SheetList}>수정하기</div>
        <div css={SheetList}>삭제하기</div>
      </BottomSheet>
    </div>
  );
}
