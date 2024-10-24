import React, { useRef, useEffect } from 'react';
import { overlayStyle, sheetStyle } from './index.style';
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
