import { Text } from '@/components';
import { Next } from '@/assets/icons';
import { menuWrapper, nextIcon } from './index.styles';

interface Props {
  menuTitle: string;
}

export default function Menu({ menuTitle }: Props) {
  return (
    <div css={menuWrapper}>
      <Text typo="body2">{menuTitle}</Text>
      <Next css={nextIcon}></Next>
    </div>
  );
}
