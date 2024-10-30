import { AppBar, GNB, Layout, Text } from '@/components';
import {
  imageStyle,
  logoutStyle,
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
} from './index.styles';
import theme from '@/styles/theme';
import Badge from './components/badge';
import { Next, Plus } from '@/assets/icons';
import Menu from './components/menu';
import { ROUTE_PATHS } from '@/constants/routes';
import { useNavigate } from 'react-router-dom';
import { useGetProfile } from '@/queries/user/profile';
import { useState } from 'react';

export default function Mypage() {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(localStorage.getItem('access') || '');

  // accessToken이 있을 때만 API 호출
  const { data } = useGetProfile(accessToken);
  const petInfo = data?.pets[0];
  const profileImage = petInfo?.image || 'images/petprofile.png';

  const logout = () => {
    localStorage.removeItem('access'); // access 키만 삭제
    setAccessToken(''); // 상태를 빈 문자열로 설정
    navigate(ROUTE_PATHS.LOGIN);
  };

  return (
    <Layout>
      <AppBar></AppBar>
      <div css={mypageWrapper}>
        <Text typo="title1">마이페이지</Text>
        <div css={myPetWrapper}>
          {!data || !data.username ? (
            <div
              css={profileAddWrapper}
              onClick={() => {
                navigate(ROUTE_PATHS.LOGIN);
              }}
            >
              <Plus css={plusIcon}></Plus>
              <Text typo="body2">당신의 댕냥이를 등록해주세요</Text>
            </div>
          ) : (
            <>
              <div css={imageStyle}>
                <img src={profileImage} alt="profile" css={imageIcon} />
              </div>
              <div css={nicknameStyle}>
                <Text typo="title2">{data.nickname || data.username || '이름이 없습니다'}</Text>
                <div css={petNameWrapper}>
                  <Badge petType={petInfo?.petType || '정보가 없습니다'}></Badge>
                  <Text typo="body2" color={theme.colors.gray300}>
                    {petInfo?.name || '댕냥이 이름이 없습니다'}
                  </Text>
                </div>
              </div>
              <Next
                css={nextIcon}
                onClick={() => {
                  navigate(ROUTE_PATHS.MYPAGE_INFO);
                }}
              ></Next>
            </>
          )}
        </div>
        <div css={myTradeWrapper}>
          <Text typo="subtitle1">나의 거래 내역</Text>
          <hr color={theme.colors.black} />
          <Menu menuTitle="판매내역" path={ROUTE_PATHS.MYPAGE_SALES_HISTORY}></Menu>
          <hr color={theme.colors.gray100} />
          <Menu menuTitle="구매내역" path={ROUTE_PATHS.MYPAGE_PURCHASE_HISTORY}></Menu>
        </div>
        <div css={myAccountWrapper}>
          <Text typo="subtitle1">나의 계정 정보</Text>
          <hr color={theme.colors.black} />
          <Menu menuTitle="주소 관리" path={ROUTE_PATHS.MYPAGE_ADDRESS}></Menu>
          <hr color={theme.colors.gray100} />
          <Menu menuTitle="간편결제 관리" path={ROUTE_PATHS.MYPAGE}></Menu>
          <hr color={theme.colors.gray100} />
          <Menu menuTitle="판매 정산 계좌" path={ROUTE_PATHS.MYPAGE}></Menu>
          <hr color={theme.colors.gray100} />
          {!accessToken ? (
            <div
              css={logoutStyle}
              onClick={() => {
                navigate(ROUTE_PATHS.LOGIN);
              }}
            >
              <Text typo="body2" color={theme.colors.gray300}>
                로그인
              </Text>
            </div>
          ) : (
            <div css={logoutStyle} onClick={logout}>
              <Text typo="body2" color={theme.colors.gray300}>
                로그아웃
              </Text>
            </div>
          )}
        </div>
      </div>
      <GNB />
    </Layout>
  );
}
