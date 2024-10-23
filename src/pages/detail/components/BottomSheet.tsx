import React, { useRef, useEffect } from 'react';
import { css } from '@emotion/react';
import theme from '@/styles/theme';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen, onClose, children }) => {
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sheetRef.current && !sheetRef.current.contains(event.target as Node)) {
        onClose(); // 바깥 클릭 시 닫기
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div css={[overlayStyle(isOpen)]}>
      <div ref={sheetRef} css={sheetStyle}>
        {children}
      </div>
    </div>
  );
};

export default BottomSheet;

const overlayStyle = (isOpen: boolean) => css`
  position: fixed;
  top: 0;
  width: 389px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${isOpen ? 'block' : 'none'};
  z-index: 1000;
`;

const sheetStyle = css`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%); /* 가로 중앙 정렬 */
  width: 100%;
  max-width: 390px;
  background-color: white;
  border-radius: 16px 16px 0 0;
  animation: slide-up 0.3s ease-out;
  z-index: 1001;
  text-align: center;

  @keyframes slide-up {
    from {
      transform: translateY(100%) translateX(-50%);
    }
    to {
      transform: translateY(0) translateX(-50%);
    }
  }
`;

export const SheetList = css`
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid ${theme.colors.gray100};
  cursor: pointer;
`;
