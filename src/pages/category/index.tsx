import { useGetCategoriesQuery } from '@/queries/category';
import CategoryItem from './components/category-item';
import { gridWrapper, wrapper, menuWrapper, hr } from './index.styles';

interface CategoryType {
  id: number;
  name: string;
  icon: string;
}

export default function Category() {
  const { data } = useGetCategoriesQuery();
  const ALL_MENU_ID: number = 1; //전체 메뉴에 대한 id
  if (!data) return null;

  return (
    <div css={wrapper}>
      <div css={menuWrapper}>
        <h3>전체 메뉴</h3>
        <hr css={hr} />
        <div css={gridWrapper}>
          {data?.map((item: CategoryType) => {
            if (item.id !== ALL_MENU_ID)
              return <CategoryItem key={item.id} id={item.id} name={item.name} icon={item.icon} />;
          })}
        </div>
      </div>
    </div>
  );
}
