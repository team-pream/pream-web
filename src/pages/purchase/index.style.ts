import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = css`
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  padding: 0px 18px;
`;

export const appBar = css`
  width: 390px;
  height: ${theme.size.appBarHeight};
  display: flex;
  align-items: center;
`;

export const mainTitleBox = css`
  width: 354px;
  padding: 20px 0;
  border-bottom: 2px solid;
`;

export const itemWrapper = css`
  padding: 18px 0;
  border-bottom: 1px solid ${theme.colors.gray100};
`;

export const item = css`
  display: flex;
  gap: 20px;
`;

export const content = css`
  width: 240px;
`;

export const topBox = css`
  display: flex;
  justify-content: space-between;
`;

export const image = css`
  width: 90px;
  height: 90px;
`;

export const textBox = css`
  display: flex;
  flex-direction: column;
  padding-top: 6px;
  cursor: pointer;
`;

export const price = css`
  padding: 7px 0 12px 0;
`;

export const purchaseInfo = css`
  width: 117px;
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

export const button = css`
  display: flex;
  gap: 6px;
  padding: 0;
`;

export const hiddenBlock = ({ isOpen }: { isOpen: boolean }) => ({
  maxHeight: isOpen ? '300px' : '0',
  overflow: 'hidden',
  transition: 'max-height 0.3s ease',
  opacity: isOpen ? 1 : 0,
});

export const shipBlock = css`
  width: 340px;
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
