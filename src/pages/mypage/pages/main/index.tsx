import { AppBar, GNB, Layout, Text } from '@/components';
import {
  imageStyle,
  profileAddWrapper,
  myAccountWrapper,
  mypageWrapper,
  myPetWrapper,
  myTradeWrapper,
  nextIcon,
  nicknameStyle,
  petNameWrapper,
  plusIcon,
  imageIcon,
  hr,
  menuline,
  nicknameWrapper,
  logoutStyle,
  plusWrapper,
  editClear,
} from './index.styles';
import theme from '@/styles/theme';
import Badge from './components/badge';
import EditButton from './components/edit-button';
import Menu from './components/menu';
import { Clear, Next, Plus } from '@/assets/icons';
import { ROUTE_PATHS } from '@/constants/routes';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGetUsersProfileQuery } from '@/queries/users';
import { useEffect, useState } from 'react';

export default function Main() {
  const navigate = useNavigate();

  const { data } = useGetUsersProfileQuery();
  const petInfo = data?.pet;
  const profileImage = petInfo?.image || 'images/petprofile.png';

  const logout = () => {
    localStorage.removeItem('access');
    navigate(ROUTE_PATHS.MAIN, { replace: true });
  };

  const location = useLocation();
  const [showUpdateMessage, setShowUpdateMessage] = useState(location.state?.editSuccess || false);

  useEffect(() => {
    if (showUpdateMessage) {
      const timer = setTimeout(() => {
        setShowUpdateMessage(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showUpdateMessage]);

  const getMessage = () => {
    switch (showUpdateMessage) {
      case 'registered':
        return '프로필이 등록되었습니다.';
      case 'updated':
        return '프로필이 수정되었습니다.';
      case 'deleted':
        return '프로필이 삭제되었습니다.';
      default:
        return '';
    }
  };

  return (
    <Layout>
      <AppBar></AppBar>
      <div css={mypageWrapper}>
        <div css={nicknameWrapper}>
          {(data?.nickname ?? data?.username) ? (
            <>
              <Text typo="title1">{data?.nickname || data?.username}</Text>
              <EditButton path={'users/edit'} />
            </>
          ) : (
            <>
              <Text typo="title1">로그인을 해주세요</Text>
              <Next
                css={nextIcon}
                onClick={() => {
                  navigate(ROUTE_PATHS.LOGIN);
                }}
              ></Next>
            </>
          )}
        </div>
        <div>
          <Text typo="subtitle1">나의 반려동물</Text>
          <hr color={theme.colors.black} css={hr} />
        </div>
        <div css={myPetWrapper}>
          {!data || !petInfo || !petInfo?.name ? (
            <>
              <div css={profileAddWrapper}>
                <div css={plusWrapper}>
                  <Plus
                    css={plusIcon}
                    color={theme.colors.gray300}
                    onClick={() => navigate('pets/edit')}
                  />
                </div>
                <Text typo="body2" color={theme.colors.gray300}>
                  당신의 댕냥이를 등록해주세요
                </Text>
              </div>
            </>
          ) : (
            <>
              <div css={imageStyle}>
                <img src={profileImage} alt="profile" css={imageIcon} />
              </div>
              <div css={nicknameStyle}>
                <Text typo="subtitle3">{petInfo?.name}</Text>
                <div css={petNameWrapper}>
                  <Badge petType={petInfo?.petType}></Badge>
                </div>
              </div>
              <div>
                <EditButton path="pets/edit" />
              </div>
            </>
          )}
        </div>
        <div css={myTradeWrapper}>
          <Text typo="subtitle1">나의 거래 내역</Text>
          <hr color={theme.colors.black} css={hr} />
          <Menu
            menuTitle="판매내역"
            path={ROUTE_PATHS.MYPAGE_SALES_HISTORY}
            color={theme.colors.black}
          ></Menu>
          <hr color={theme.colors.gray100} css={menuline} />
          <Menu
            menuTitle="구매내역"
            path={ROUTE_PATHS.MYPAGE_PURCHASE_HISTORY}
            color={theme.colors.black}
          ></Menu>
        </div>
        <div css={myAccountWrapper}>
          <Text typo="subtitle1">나의 계정 정보</Text>
          <hr color={theme.colors.black} css={hr} />
          <Menu
            menuTitle="주소 관리"
            path={ROUTE_PATHS.MYPAGE_ADDRESS}
            color={theme.colors.black}
          ></Menu>
          <hr color={theme.colors.gray100} css={menuline} />
          <Menu
            menuTitle="판매 정산 계좌"
            path={ROUTE_PATHS.MYPAGE_INFO}
            color={theme.colors.black}
          ></Menu>
          {data && (
            <>
              <hr color={theme.colors.gray100} css={menuline} />
              <div css={logoutStyle} onClick={logout}>
                <Text typo="body2" color={theme.colors.gray300}>
                  로그아웃
                </Text>
              </div>
            </>
          )}
        </div>
        {showUpdateMessage && (
          <div css={editClear}>
            <Clear width="16px" />
            <Text typo="body4" color={theme.colors.white}>
              {getMessage()}
            </Text>
          </div>
        )}
      </div>
      <GNB />
    </Layout>
  );
}
