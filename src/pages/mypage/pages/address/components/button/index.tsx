import { ButtonStyle } from './index.style';

interface AddressBtnProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<AddressBtnProps> = ({ children, onClick, disabled = false }) => {
  return (
    <button css={ButtonStyle} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
