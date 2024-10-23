import { css } from '@emotion/react';

export const Wrapper = css`
  width: 390px;
  height: 844px;
  background-color: white;
  border: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  justify-content: space-between; //Header와 Footer를 양끝에 배치 */
  box-sizing: border-box;
`;
export const Header = css`
  /* width: 100%; */
  height: 58px;
  padding: 0;
  border: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Contents = css`
  height: 718px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const DetailCarousel = css`
  height: 332px;
  border-radius: 0px 0px 10px 10px;
  background-color: #dbdbdb;
`;

export const TitleWrapper = css`
  width: 90%;
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`;

export const TitleTop = css`
  display: flex;
  height: 20px;
  margin-bottom: 5px;
`;

export const Title = css`
  font-size: 16px;
  font-weight: 500;
  flex: 1;
`;

export const OptionIcon = css`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
export const TitleBottom = css`
  font-size: 24px;
  font-weight: 600;
`;

export const InfoWrapper = css`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  font-size: 12px;
`;

export const InfoTitle = css`
  color: #aeaeae;
  margin-right: 20px;
  width: 46px;
`;
export const InfoValue = css``;
export const Footer = css`
  height: 48px;
  padding: 10px;
  border: 1px solid #dbdbdb;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
