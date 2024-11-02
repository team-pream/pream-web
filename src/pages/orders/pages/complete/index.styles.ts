import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = css`
  width: 100%;
  height: 100%;
`;

export const confirmWrapper = css`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 35px;
  margin: 65px 0 85px 0;
`;

export const orderInfoWrapper = css`
  height: 50%;
  padding: 18px;
`;

export const completeIcon = css`
  width: 70px;
  height: 70px;
`;

export const hr = css`
  border: 2px solid ${theme.colors.gray100};
`;

export const productInfoWrapper = css`
  display: flex;
  flex-direction: column;
`;

export const InnerWrapper = css`
  display: flex;
  margin: 21px 0 35px 0;
`;

export const productImg = css`
  width: 62px;
  height: 60px;
  border-radius: 8px;
  background-color: ${theme.colors.gray200};
  margin-right: 20px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

export const textWrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: auto 0;
`;

export const shipBlock = css`
  border-top: 2px solid;
  border-bottom: 2px solid;
  padding: 18px 0 33px 0;
  display: flex;
  flex-direction: column;
`;

export const blockTitle = css`
  padding: 0 0 21px 0;
`;

export const info = css`
  display: flex;
  gap: 28px;
`;

export const infoTitle = css`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;
export const infoContent = css`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

export const paymentBlock = css`
  padding: 18px 0 40px 0;
  display: flex;
  flex-direction: column;
`;
