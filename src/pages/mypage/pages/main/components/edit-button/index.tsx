import { Text } from '@/components';
import theme from '@/styles/theme';
import { buttonWrapper } from './index.styles';
import { useNavigate } from 'react-router-dom';

interface EditProps {
  path: string;
}

export default function EditButton({ path }: EditProps) {
  const navigate = useNavigate();
  return (
    <div
      css={buttonWrapper}
      onClick={() => {
        navigate(path);
      }}
    >
      <Text typo="body2" color={theme.colors.gray300}>
        편집
      </Text>
    </div>
  );
}
