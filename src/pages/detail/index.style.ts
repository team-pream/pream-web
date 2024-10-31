import { css } from '@emotion/react';
import { colors } from '@/styles/colors';

export const Info_wrapp = css`
  display: flex;
  padding: 3px 20px;
`;

export const list_title = css`
  font-size: 12px;
`;

export const list_content = css`
  font-size: 12px;
`;

export const statusImgStyle = css`
  position: relative;
  width: 100%;
  background-color: ${colors.grayOpacity200};
  z-index: 9000;
  border-radius: 0px 0px 20px 20px;
`;

export const overlayStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); // 반투명한 검정색 오버레이
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 0px 20px 20px; // 경계선 라운드
`;

export const statusTextStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${colors.white};
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  z-index: 1; // 텍스트가 오버레이 위에 오도록 설정
`;
