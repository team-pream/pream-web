import { css } from '@emotion/react';
import { colors } from '@/styles/colors';
import theme from '@/styles/theme';

export const wrapper = css`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 0 0 calc(${theme.size.gnbHeight} + 18px);
`;

export const carouselWrapper = css`
  position: relative;
  width: 100%;
  background-color: ${colors.grayOpacity200};
  border-radius: 0px 0px 20px 20px;
`;

export const statusText = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${colors.white};
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  z-index: 6; // 텍스트가 오버레이 위에 오도록 설정
`;

export const ctaButtonWrapper = css`
  position: fixed;
  bottom: 0;
  margin: 0 auto;
  z-index: ${theme.zIndex.gnb};
  width: 100%;
  max-width: ${theme.size.maxWidth};
  padding: 14px 18px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: ${theme.colors.white};
  box-shadow: 0px -4px 6px 0px ${theme.colors.grayOpacity100};
`;
