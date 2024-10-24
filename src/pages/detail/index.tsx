import { useState } from 'react';
import { Wrapper, Header, Footer, Contents } from './index.styles';
import { SheetList } from './components/bottom-sheet/index.style.ts';
import { useNavigate } from 'react-router-dom';
import Carousel from './components/carousel/index.tsx';
import SvgAppbarBack from '@/assets/icons/AppbarBack';
import BottomSheet from './components/bottom-sheet/index.tsx';
import ProductInfo from './components/product-infomation/index.tsx';

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
        <ProductInfo onOptionClick={handleOptionClick} />
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
