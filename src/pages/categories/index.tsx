import { useGetCategoriesQuery } from '@/queries/categories';
import { gridWrapper, menuWrapper, hr } from './index.styles';
import { AppBar, GNB, Layout, SearchBar, Text } from '@/components';
import { AppBarBack } from '@/assets/icons';
import CategoryItem from './components/category-item';
import theme from '@/styles/theme';

const ALL_MENU_ID: number = 1; //전체 메뉴에 대한 id

export default function Categories() {
  const { data } = useGetCategoriesQuery();

  return (
    <Layout>
      <AppBar prefix={<AppBarBack height="24px" cursor="pointer" />} suffix={<SearchBar />} />

      <div css={menuWrapper}>
        <Text typo="title1" color={theme.colors.black}>
          전체 메뉴
        </Text>
        <hr css={hr} />

        <div css={gridWrapper}>
          {data?.map((item: Category) => {
            if (item.id !== ALL_MENU_ID)
              return <CategoryItem key={item.id} id={item.id} name={item.name} icon={item.icon} />;
          })}
        </div>
      </div>

      <GNB />
    </Layout>
  );
}
