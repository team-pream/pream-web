import { gridItem } from '../index.styles';

interface Props {
  item: {
    id: number;
    name: string;
    icon: string;
  };
}
export default function CategoryItem({ item }: Props) {
  return (
    <div
      css={gridItem}
      onClick={() => {
        alert(item.id + item.name); /** 추후 카테고리 별 상품 목록으로 이동 */
      }}
    >
      <img alt={item.name} src={item.icon} />
      <span>{item.name}</span>
    </div>
  );
}
