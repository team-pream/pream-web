import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = css`
  width: 100%;
  padding: 24px 0px 100px 0px;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
`;

export const wrap = css`
  width: 100%;
  padding: 0 18px;
`;

export const hr = css`
  width: calc(100% - 36px);
  height: 2px;
  margin: 19px auto 18px auto;
`;

export const productInfo = css`
  width: 100%;
  padding: 0 0 18px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const textarea = css`
  width: 100%;
  height: 233px;
  padding: 20px;
  border-radius: 10px;
  background: ${theme.colors.gray100};
  ${theme.typo.body5};
  line-height: 1.6;

  &::placeholder {
    color: ${theme.colors.gray300};
  }
`;

export const fixedCTAButtonWrapper = css`
  position: fixed;
  bottom: 0;
  padding: 18px;
  width: 100%;
  min-width: ${theme.size.minWidth};
  max-width: ${theme.size.maxWidth};
  margin: 0 auto;
`;

export const amount = css`
  display: flex;
  gap: 4px;
  align-items: center;
  margin-top: 11px;
`;

export const toolTip = css`
  cursor: pointer;
  position: relative;
  display: flex;

  &:hover > div {
    opacity: 1;
    visibility: visible;
  }
`;

export const toolTipInfo = css`
  opacity: 0;
  visibility: hidden;
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: absolute;
  width: 322px;
  padding: 16px;
  top: calc(100% + 8px);
  left: 100px;
  transform: translateX(-50%);
  background-color: white;
  border-radius: 12px;
  z-index: 2;
  box-shadow: 0 0 6px rgba(0, 0, 6, 0.1);
  transition:
    opacity 0.2s ease,
    visibility 0.2s ease;
`;

export const amountPrice = css`
  display: flex;
  align-items: center;
`;
