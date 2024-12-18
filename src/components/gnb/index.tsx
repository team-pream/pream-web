import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '@/constants/routes';
import { GnbCategory, GnbHome, GnbMy } from '@/assets/icons';
import { menuItem, wrapper } from './index.styles';
import { Text } from '@/components';
import theme from '@/styles/theme';

const MENUS = [
  {
    name: '홈',
    icon: <GnbHome width="20px" height="20px" />,
    path: ROUTE_PATHS.MAIN,
  },
  {
    name: '카테고리',
    icon: <GnbCategory width="20px" height="20px" />,
    path: ROUTE_PATHS.CATEGORIES,
  },
  { name: '마이', icon: <GnbMy width="20px" height="20px" />, path: ROUTE_PATHS.MYPAGE },
];

export function GNB() {
  const navigate = useNavigate();
  const pathname = window.location.pathname;

  return (
    <nav css={wrapper}>
      {MENUS.map((menu) => (
        <div
          key={menu.name}
          css={menuItem({ isActive: pathname === menu.path })}
          onClick={() => navigate(menu.path)}
        >
          {menu.icon}
          <Text
            typo="body2"
            color={pathname === menu.path ? theme.colors.green200 : theme.colors.black100}
          >
            {menu.name}
          </Text>
        </div>
      ))}
    </nav>
  );
}
