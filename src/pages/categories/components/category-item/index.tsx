import { useNavigate } from 'react-router-dom';
import { gridItem } from './index.styles';
import { Text } from '@/components';
import theme from '@/styles/theme';

interface Props {
  id: number;
  name: string;
  icon: string;
}

export default function CategoryItem({ id, name, icon }: Props) {
  const navigate = useNavigate();

  return (
    <button
      css={gridItem}
      onClick={() => {
        navigate(`/products?category=${id}`, { state: { id, name } }); // state로 Props 전달
      }}
    >
      <img alt={name} src={icon} />
      <Text typo="body3" color={theme.colors.black}>
        {name}
      </Text>
    </button>
  );
}
