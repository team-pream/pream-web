import { Text } from '@/components';
import { Next } from '@/assets/icons';
import { menuWrapper, nextIcon } from './index.styles';
import { useNavigate } from 'react-router-dom';

interface Props {
  menuTitle: string;
  path: string;
}

export default function Menu({ menuTitle, path }: Props) {
  const navigate = useNavigate();
  return (
    <div
      css={menuWrapper}
      onClick={() => {
        navigate(path);
      }}
    >
      <Text typo="body2">{menuTitle}</Text>
      <Next css={nextIcon}></Next>
    </div>
  );
}
