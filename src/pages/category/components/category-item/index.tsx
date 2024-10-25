import { useNavigate } from 'react-router-dom';
import { gridItem } from './index.styles';

interface Props {
  item: {
    id: number;
    name: string;
    icon: string;
  };
}
export default function CategoryItem({ item }: Props) {
  const navigate = useNavigate();
  return (
    <div
      css={gridItem}
      onClick={() => {
        console.log(item.id);
        navigate(item.id);
      }}
    >
      <img alt={item.name} src={item.icon} />
      <span>{item.name}</span>
    </div>
  );
}
