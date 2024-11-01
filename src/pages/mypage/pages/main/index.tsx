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
} from './index.styles';
import theme from '@/styles/theme';
import Badge from './components/badge';
import EditButton from './components/edit-button';
import Menu from './components/menu';
import { Next, Plus } from '@/assets/icons';
import { ROUTE_PATHS } from '@/constants/routes';
import { useNavigate } from 'react-router-dom';
import { useGetUsersMeQuery } from '@/queries/users';
import { useEffect, useState } from 'react';

export default function Main() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  useEffect(() => {
    const accessToken = localStorage.getItem('access');
    if (accessToken) {
      //access token이 있으면 로그인 상태
      setIsLogin(true);
    } else {
      // 없으면 로그인 상태 아님
      setIsLogin(false);
    }
  }, []);

  const { data } = useGetUsersMeQuery(isLogin); //로그인 상태(isLogin=true)일때만 실행
  const petInfo = data?.pets[0]; //대표 펫 정보 하나만 조회
  const profileImage = petInfo?.image || 'images/petprofile.png';

  const logout = () => {
    localStorage.removeItem('access'); // access 키만 삭제
    setIsLogin(false);
    location.replace(ROUTE_PATHS.MAIN);
  };

  const handleClickPlus = () => {
    //댕냥이 등록 플러스 버튼 이벤트

    if (isLogin) {
      //로그인이 되어있으면 펫 정보 수정 페이지로 이동
      navigate('pets/edit');
    } else {
      //로그인이 되어있지 않으면 로그인 화면으로 이동
      navigate(ROUTE_PATHS.LOGIN);
    }
  };

  return (
    <Layout>
      <AppBar></AppBar>
      <div css={mypageWrapper}>
        <div css={nicknameWrapper}>
          {isLogin ? (
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
          {!petInfo || !petInfo?.name ? (
            <>
              <div css={profileAddWrapper}>
                <div css={plusWrapper}>
                  <Plus css={plusIcon} color={theme.colors.gray300} onClick={handleClickPlus} />
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
          {isLogin && (
            <>
              <hr color={theme.colors.gray100} css={menuline} />
              <div css={logoutStyle} onClick={logout}>
                <Text typo="body2" color={theme.colors.gray300}>
                  로그아웃
                </Text>
              </div>
              <hr color={theme.colors.gray100} css={menuline} />
              <div css={logoutStyle}>
                <Text typo="body2" color={theme.colors.gray200}>
                  회원탈퇴
                </Text>
              </div>
            </>
          )}
        </div>
      </div>
      <GNB />
    </Layout>
  );
}
