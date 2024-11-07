import { EmotionalPetIcon } from '@/assets/icons';
import { iconWrapper, textWrapper } from './index.styles';
import theme from '@/styles/theme';
import { Text } from '@/components';

interface Props {
  message: string;
}

export default function Message({ message }: Props) {
  return (
    <div css={textWrapper}>
      <EmotionalPetIcon css={iconWrapper} />
      <Text typo="body2" color={theme.colors.gray300}>
        {message}
      </Text>
    </div>
  );
}
