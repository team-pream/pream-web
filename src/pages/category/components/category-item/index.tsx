import { useNavigate } from 'react-router-dom';
import { gridItem } from './index.styles';

interface Props {
  id: number;
  name: string;
  icon: string;
}
export default function CategoryItem({ id, name, icon }: Props) {
  const navigate = useNavigate();
  return (
    <div
      css={gridItem}
      onClick={() => {
        navigate(id);
      }}
    >
      <img alt={name} src={icon} />
      <span>{name}</span>
    </div>
  );
}
