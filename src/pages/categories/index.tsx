import { useGetCategoriesQuery } from '@/queries';
import { gridWrapper, menuWrapper, hr } from './index.styles';
import { AppBar, GNB, Layout, SearchBar, Text } from '@/components';
import { AppBarBack } from '@/assets/icons';
import CategoryItem from './components/category-item';
import theme from '@/styles/theme';
import { Category } from '@/types';
import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryItemSkeleton from './components/category-item/indexSkeleton';

const ALL_MENU_ID: number = 1; //전체 메뉴에 대한 id

export default function Categories() {
  const { data, isLoading } = useGetCategoriesQuery();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState<string>('');

  const handleChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  // Enter 키 이벤트 핸들러
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // 기본 동작 방지
      navigate(`/products/search?keyword=${keyword}`, { state: { keyword } });
    }
  };

  const handleSearchIconClick = () => {
    if (keyword.trim() === '') return; //공백제거 후 빈값이면 동작안함
    navigate(`/products/search?keyword=${keyword}`, { state: { keyword } });
  };

  return (
    <Layout>
      <AppBar
        prefix={
          <AppBarBack
            height="24px"
            cursor="pointer"
            onClick={() => {
              navigate(-1);
            }}
          />
        }
        suffix={
          <SearchBar
            onChange={handleChangeKeyword}
            onKeyDown={handleKeyDown}
            onClick={handleSearchIconClick}
            autoFocus
          />
        }
      />

      <div css={menuWrapper}>
        <Text typo="title1" color={theme.colors.black}>
          전체 메뉴
        </Text>
        <hr css={hr} />

        <div css={gridWrapper}>
          {isLoading ? (
            <CategoryItemSkeleton />
          ) : (
            <>
              {data?.map((item: Category) => {
                if (item.id !== ALL_MENU_ID)
                  return (
                    <CategoryItem key={item.id} id={item.id} name={item.name} icon={item.icon} />
                  );
              })}
            </>
          )}
        </div>
      </div>

      <GNB />
    </Layout>
  );
}
