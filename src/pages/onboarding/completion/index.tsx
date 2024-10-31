import { textBox } from './index.styles';
import { Complete } from '@/assets/icons';
import { useNavigate } from 'react-router-dom';
import { Text, Button } from '@/components';
import { useGetUserNameQuery } from '@/queries/user';
import theme from '@/styles/theme';

export default function Completion() {
  const navigate = useNavigate();
  const { data } = useGetUserNameQuery();
  const handleCompleteButtonClick = () => {
    navigate('/', { replace: true });
  };

  return (
    <div css={textBox}>
      <Complete width="70px" />
      <Text typo="title1" color={theme.colors.green200}>
        {data.nickname} 님<br />
        <Text typo="title1" color={theme.colors.black}>
          회원가입이 완료됐어요!
        </Text>
      </Text>
      <Button size="l" onClick={handleCompleteButtonClick}>
        시작하기
      </Button>
    </div>
  );
}
