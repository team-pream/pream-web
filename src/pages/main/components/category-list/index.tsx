import { categoryList, categoryItems, categoryItem, categoryIcon } from '../../index.styles';
import { Category } from '@/types';
import { Text } from '@/components';
import { useNavigate } from 'react-router-dom';

interface CategoryListProps {
  categories: Category[] | undefined;
  excludedCategories: number[];
}

export default function CategoryList({ categories, excludedCategories }: CategoryListProps) {
  const navigate = useNavigate();

  return (
    <section css={categoryList}>
      <div css={categoryItems}>
        {categories
          ?.filter((category: Category) => !excludedCategories.includes(category.id))
          .map((category: Category) => (
            <div
              key={category.id}
              css={categoryItem}
              onClick={
                category.id !== 1
                  ? () =>
                      navigate(`/products?category=${category.id}`, {
                        state: { id: category.id, name: category.name },
                      })
                  : () => navigate('/categories')
              }
            >
              <img src={category.icon} alt={category.name} css={categoryIcon} />
              <Text typo="body3">{category.name}</Text>
            </div>
          ))}
      </div>
    </section>
  );
}
