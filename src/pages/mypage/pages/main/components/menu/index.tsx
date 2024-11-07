import { Text } from '@/components';
import { Next } from '@/assets/icons';
import { menuWrapper, nextIcon } from './index.styles';
import { useNavigate } from 'react-router-dom';

interface Props {
  menuTitle: string;
  path: string;
  color: string;
}

export default function Menu({ menuTitle, path, color }: Props) {
  const navigate = useNavigate();
  return (
    <div
      css={menuWrapper}
      onClick={() => {
        navigate(path);
      }}
    >
      <Text typo="body2" color={color}>
        {menuTitle}
      </Text>
      <Next css={nextIcon}></Next>
    </div>
  );
}
