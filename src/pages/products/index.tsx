import { DropdownUnfold, LikeOff } from '@/assets/icons';
import {
  countText,
  dropdownIcon,
  dropdownItem,
  dropdownMenu,
  heartIcon,
  imageBox,
  infoWrapper,
  item,
  itemList,
  itemPrice,
  itemTitle,
  listWrapper,
  opacityBox,
  productsWrapper,
  sampleImage,
  span,
  statusWrapper,
  textBox,
  title,
  wrapper,
} from './index.styles';
import { useState } from 'react';

export default function Products() {
  const [isOpen, setIsOpen] = useState(false); // 드롭다운 열림/닫힘 상태
  const sampleImgUrl =
    'https://github.com/user-attachments/assets/890c728b-8e32-474f-9db1-a036e6955713'; //api 연동 후 삭제예정
  const toggleDropdown = () => {
    setIsOpen(!isOpen); // 클릭 시 드롭다운 토글
  };

  const handleItemClick = (item: string) => {
    console.log(item); // 드롭다운 항목 선택 시 처리 -> 필터링 된 상품
    setIsOpen(false); // 선택 후 드롭다운 닫기
  };
  return (
    <div css={wrapper}>
      <div css={title}>{'title'}</div>
      <div css={productsWrapper}>
        <div css={infoWrapper}>
          <div css={countText}>
            <span css={span}>{'163개'}</span>의 상품
          </div>
          <div css={statusWrapper} onClick={toggleDropdown}>
            <span css={span}>상태</span>
            <DropdownUnfold css={dropdownIcon} />

            {isOpen && ( // 드롭다운이 열렸을 때만 메뉴를 보여줍니다.
              <div css={dropdownMenu}>
                <div css={dropdownItem} onClick={() => handleItemClick('AVAILABLE')}>
                  AVAILABLE
                </div>
                <div css={dropdownItem} onClick={() => handleItemClick('SOLD_OUT')}>
                  SOLD_OUT
                </div>
                <div css={dropdownItem} onClick={() => handleItemClick('RESERVED')}>
                  RESERVED
                </div>
              </div>
            )}
          </div>
        </div>
        <div css={listWrapper}>
          <div css={itemList}>
            <div css={item}>
              <div css={imageBox}>
                <div css={opacityBox} />
                <img src={sampleImgUrl} alt="itemImage" css={sampleImage} />
                <LikeOff css={heartIcon} />
              </div>
              <div css={textBox}>
                <span css={itemTitle}>{'"1번 사용한 강아지 카시트예요!"'}</span>
                <span css={itemPrice}>{'15,000원'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
