import { wrapper } from './index.styles';
import { Text } from '@/components';

interface Props {
  petType: string;
}

export default function Badge({ petType }: Props) {
  const type = petType == 'DOG' ? '강아지' : '고양이';
  return (
    <div css={wrapper}>
      <Text typo="body3">{type}</Text>
    </div>
  );
}
