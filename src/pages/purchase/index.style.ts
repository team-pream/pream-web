import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = css`
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  padding: 0px 18px;
`;

export const mainTitleBox = css`
  width: 354px;
  padding: 20px 0;
  border-bottom: 2px solid;
`;

export const mainTitle = css`
  font-size: 24px;
  font-weight: 600;
`;

export const itemWrapper = css`
  padding: 18px 0;
  border-bottom: 1px solid ${theme.colors.gray100};
`;

export const item = css`
  display: flex;
  justify-content: space-between;
`;

export const content = css`
  display: flex;
  gap: 20px;
`;

export const image = css`
  width: 90px;
  height: 90px;
`;

export const textBox = css`
  display: flex;
  flex-direction: column;
  padding: 6px 0;
`;

export const contentTitle = css`
  font-size: 12px;
  font-weight: 500;
`;

export const price = css`
  font-size: 16px;
  font-weight: 600;
  padding: 7px 0 21px 0;
`;

export const purchaseInfo = css`
  font-size: 14px;
  font-weight: 600;
  color: ${theme.colors.green200};
  cursor: pointer;
  &:hover {
    color: #68c9bd;
  }
`;

export const date = css`
  font-size: 12px;
  font-weight: 600;
  padding: 6px 0;
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
  font-size: 16px;
  font-weight: 600;
  padding: 0 0 21px 0;
`;

export const info = css`
  display: flex;
  gap: 28px;
`;

export const infoTitle = css`
  font-size: 14px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 11px;
`;
export const infoContent = css`
  font-size: 14px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

export const paymentBlock = css`
  padding-top: 18px;
`;
