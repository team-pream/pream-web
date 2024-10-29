import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const Wrapper = css`
  /* width: 480px; */
  max-width: 480px;
  height: 100vh;
  min-height: 844px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between; //Header와 Footer를 양끝에 배치 */
  box-sizing: border-box;
  margin: auto;
`;
export const Header = css`
  width: 100%;
  height: 58px;
  padding: 22px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Contents = css`
  min-height: 710px;
  overflow-x: hidden; // 캐러셀 이미지 숨기기
  /* height: 100%; */
  padding-bottom: 78px;
  -ms-overflow-style: none; /* IE와 Edge에서 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox에서 스크롤바 숨기기 */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari에서 스크롤바 숨기기 */
  }
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const DetailCarousel = css`
  height: 332px;
  border-radius: 0px 0px 10px 10px;
  background-color: ${theme.colors.gray100};
`;

export const Footer = css`
  height: 76px;
  padding: 10px;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
