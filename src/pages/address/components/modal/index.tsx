import React from 'react';
import theme from '@/styles/theme';
import { modalStyle, buttonStyle, overlayStyle } from './index.style';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  buttonText: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, message, buttonText }) => {
  if (!isOpen) return null;

  return (
    <>
      <div css={overlayStyle} onClick={onClose}></div>
      <div css={modalStyle}>
        <div>
          <span style={{ fontSize: '48px', color: `${theme.colors.green200}` }}>✓</span>
        </div>
        <div css={{ fontSize: '14px', fontWeight: '600' }}>{title}</div>
        <span css={{ fontSize: '10px', color: `${theme.colors.gray300}` }}>{message}</span>
        <button css={buttonStyle} onClick={onClose}>
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default Modal;
