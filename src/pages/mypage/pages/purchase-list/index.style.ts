import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const mainWrapper = css`
  padding: 0 18px;
`;

export const mainTitleBox = css`
  width: 100%;
  padding: 20px 0;
  border-bottom: 2px solid;
`;

export const itemWrapper = css`
  width: 100%;
  padding: 18px 0;
  border-bottom: 1px solid ${theme.colors.gray100};
`;

export const item = css`
  display: flex;
  gap: 20px;
  width: 100%;
`;

export const content = css`
  width: 100%;
`;

export const topBox = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const image = css`
  width: 90px;
  height: 90px;
  border-radius: 13px;
`;

export const textBox = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 6px;
  cursor: pointer;
`;

export const title = css`
  width: 100%;
  max-width: 280px;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  overflow: hidden;
`;

export const price = css`
  padding: 7px 0 12px 0;
`;

export const buttonContainer = css`
  display: flex;
  gap: 6px;
  width: 100%;
`;

export const button = css`
  display: flex;
  gap: 6px;
  padding: 0;
  position: relative;
  width: 50%;
  height: 32px;
`;

export const purchaseInfoButton = css`
  position: absolute;
  width: 100%;
  height: 32px;
  border: 0.5px solid ${theme.colors.gray200};
  border-radius: 7px;
  cursor: pointer;
  &:hover {
    color: ${theme.colors.gray300};
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const purchaseButton = css`
  position: absolute;
  width: 100%;
  height: 32px;
  border: 0.5px solid ${theme.colors.gray200};
  border-radius: 7px;
  cursor: pointer;
  &:hover {
    color: ${theme.colors.gray300};
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const date = css`
  padding-top: 6px;
`;

export const hiddenBlock = ({ isOpen }: { isOpen: boolean }) => ({
  maxHeight: isOpen ? '300px' : '0',
  overflow: 'hidden',
  transition: 'max-height 0.3s ease',
  opacity: isOpen ? 1 : 0,
});

export const shipBlock = css`
  width: 100%;
  border-bottom: 2px solid;
  padding: 24px 0 33px 0;
`;

export const blockTitle = css`
  display: block;
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
  padding-top: 18px;
`;
