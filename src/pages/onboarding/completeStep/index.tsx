import { textBox, highlightText, completeButton } from './index.styles';
import { Complete } from '@/assets/icons';
import { useNavigate } from 'react-router-dom';

export default function CompleteStep() {
  const navigate = useNavigate();

  function handleButtonComplete() {
    navigate('/', { replace: true });
  }
  return (
    <div css={[textBox, { marginTop: '200px' }]}>
      <Complete width="70px" css={{ marginBottom: '30px' }} />
      <h1>
        <span css={highlightText}>두부집사 님</span>
        <br />
        회원가입이 완료됐어요!
      </h1>
      <button css={completeButton} onClick={handleButtonComplete}>
        시작하기
      </button>
    </div>
  );
}
