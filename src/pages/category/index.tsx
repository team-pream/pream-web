import { useGetCategoriesQuery } from '@/queries/category';
import CategoryItem from './components/category-item';
import { gridWrapper } from './index.styles';

export default function Category() {
  const { data } = useGetCategoriesQuery();
  if (!data) return null;

  const categories = data.data;

  const categoryItems: React.ReactNode[] = [];
  for (let i = 0; i < categories.length; i++) {
    const categoryItem = categories[i];
    categoryItems.push(<CategoryItem key={categoryItem.id} item={categoryItem} />);
  }

  return (
    <>
      <div>
        <div></div>
        <h3>전체 메뉴</h3>
        <hr />
        <div css={gridWrapper}>{categoryItems}</div>
      </div>
    </>
  );
}
