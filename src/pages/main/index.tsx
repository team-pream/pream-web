import { wrapper } from './index.styles';
import { categoryList, categoryItems, categoryItem, categoryIcon } from './index.styles';
import { useNavigate } from 'react-router-dom';
import { useGetCategoriesQuery } from '@/queries/categories';

interface CategoryData {
  id: number;
  name: string;
  icon: string;
}

const CAT_WHEEL = 4;
const WALKING = 5;
const EXCLUDED_CATEGORIES = [CAT_WHEEL, WALKING];

export default function Main() {
  const navigate = useNavigate();
  const { data } = useGetCategoriesQuery();

  return (
    <div css={wrapper}>
      <header>header</header>
      <main>
        <div>carousel</div>
        <div css={categoryList}>
          <div css={categoryItems}>
            {data
              ?.filter((item: CategoryData) => !EXCLUDED_CATEGORIES.includes(item.id))
              .map((item: CategoryData) => (
                <div key={item.id} css={categoryItem}>
                  <img
                    src={item.icon}
                    alt={item.name}
                    css={categoryIcon}
                    onClick={() => navigate(item.id)}
                  />
                  <span>{item.name}</span>
                </div>
              ))}
          </div>
        </div>
        <div>list</div>
      </main>
      <nav>nav</nav>
    </div>
  );
}
