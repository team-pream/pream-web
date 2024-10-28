import { useGetCategoriesQuery } from '@/queries/category';
import { gridWrapper, menuWrapper, hr } from './index.styles';
import { AppBar, GNB, Layout, SearchBar, Text } from '@/components';
import { AppBarBack } from '@/assets/icons';
import CategoryItem from './components/category-item';
<<<<<<< HEAD
import theme from '@/styles/theme';
=======
import { gridWrapper, wrapper, menuWrapper, hr } from './index.styles';
import { AppBar, GNB, SearchBar, Text } from '@/components';
import theme from '@/styles/theme';
import { AppBarBack } from '@/assets/icons';
>>>>>>> fbff0a4 ([PREAM-108] 공통 UI 컴포넌트 적용 (#38))

interface CategoryType {
  id: number;
  name: string;
  icon: string;
}

const ALL_MENU_ID: number = 1; //전체 메뉴에 대한 id

export default function Category() {
  const { data } = useGetCategoriesQuery();

  return (
<<<<<<< HEAD
    <Layout>
=======
    <div css={wrapper}>
>>>>>>> fbff0a4 ([PREAM-108] 공통 UI 컴포넌트 적용 (#38))
      <AppBar prefix={<AppBarBack height="24px" cursor="pointer" />} suffix={<SearchBar />} />

      <div css={menuWrapper}>
        <Text typo="title1" color={theme.colors.black}>
          전체 메뉴
        </Text>
        <hr css={hr} />

        <div css={gridWrapper}>
          {data?.map((item: CategoryType) => {
            if (item.id !== ALL_MENU_ID)
              return <CategoryItem key={item.id} id={item.id} name={item.name} icon={item.icon} />;
          })}
        </div>
      </div>

      <GNB />
<<<<<<< HEAD
    </Layout>
=======
    </div>
>>>>>>> fbff0a4 ([PREAM-108] 공통 UI 컴포넌트 적용 (#38))
  );
}
