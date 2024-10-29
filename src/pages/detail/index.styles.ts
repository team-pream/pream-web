import { css } from '@emotion/react';
import theme from '@/styles/theme';
import { colors } from '@/styles/colors';

export const Wrapper = css`
  width: ${theme.size.maxWidth};
  background-color: ${colors.white};
`;

export const Contents = css`
  overflow-x: hidden; // 캐러셀 이미지 숨기기
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
