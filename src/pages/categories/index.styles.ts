import theme from '@/styles/theme';
import { css } from '@emotion/react';

<<<<<<< HEAD
export const menuWrapper = css`
  width: 100%;
  padding: 24px 18px;
=======
export const wrapper = css`
  width: ${theme.size.maxWidth};
  padding: ${theme.size.appBarHeight} 0 0 0;
  margin: 0 auto;
`;

export const menuWrapper = css`
  width: ${theme.size.maxWidth};
  padding: 24px 18px;
  margin: 0 auto;
>>>>>>> a93b084 ([PREAM-108] 공통 UI 컴포넌트 적용 (#38))
`;

export const hr = css`
  margin-top: 11px;
  border-color: ${theme.colors.black};
`;

export const gridWrapper = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 기본적으로 4개의 열로 나누기 */
  padding: 26px 28px;
<<<<<<< HEAD
  gap: 18px;
=======
  gap: 21px;
>>>>>>> a93b084 ([PREAM-108] 공통 UI 컴포넌트 적용 (#38))
`;
