import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '@/constants/routes';
import { GnbCategory, GnbHome, GnbMy, LikeOff } from '@/assets/icons';
import { menuItem, menuLabel, wrapper } from './index.styles';

const MENUS = [
  {
    name: '홈',
    icon: <GnbHome width="20px" height="20px" />,
    path: ROUTE_PATHS.MAIN,
  },
  {
    name: '카테고리',
    icon: <GnbCategory width="20px" height="20px" />,
    path: ROUTE_PATHS.CATEGORY,
  },
  { name: '찜', icon: <LikeOff width="20px" height="20px" />, path: ROUTE_PATHS.LIKE },
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
          <span css={menuLabel({ isActive: pathname === menu.path })}>{menu.name}</span>
        </div>
      ))}
    </nav>
  );
}
