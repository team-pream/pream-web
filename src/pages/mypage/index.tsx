import { AppBar, GNB, Text } from '@/components';
import {
  imageStyle,
  logout,
  profileAddWrapper,
  myAccountWrapper,
  mypageWrapper,
  myPetWrapper,
  myTradeWrapper,
  nextIcon,
  nicknameStyle,
  petNameWrapper,
  wrapper,
  plusIcon,
} from './index.styles';
import theme from '@/styles/theme';
import Badge from './components/badge';
import { Next, Plus } from '@/assets/icons';
import Menu from './components/menu';
import { ROUTE_PATHS } from '@/constants/routes';
import { useNavigate } from 'react-router-dom';

export default function Mypage() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('access');
  const login = () => {
    navigate('/login');
  };
  return (
    <div css={wrapper}>
      <AppBar></AppBar>
      <div css={mypageWrapper}>
        <Text typo="title1">마이페이지</Text>
        <div css={myPetWrapper}>
          {!accessToken ? (
            <div css={profileAddWrapper} onClick={login}>
              <Plus css={plusIcon}></Plus>
              <Text typo="body2">당신의 댕냥이를 등록해주세요</Text>
            </div>
          ) : (
            <>
              <div css={imageStyle}>
                <img src="images/petprofile.png" alt="profil" css={imageStyle} />
              </div>
              <div css={nicknameStyle}>
                <Text typo="title2">두부 집사</Text>
                <div css={petNameWrapper}>
                  <Badge petType="DOG"></Badge>
                  <Text typo="body2" color={theme.colors.gray300}>
                    두부
                  </Text>
                </div>
              </div>
              <Next
                css={nextIcon}
                onClick={() => {
                  navigate('/mypage/user/edit');
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
          <Menu menuTitle="주소 관리" path={'/mypage'}></Menu>
          <hr color={theme.colors.gray100} />
          <Menu menuTitle="간편결제 관리" path={'/mypage'}></Menu>
          <hr color={theme.colors.gray100} />
          <Menu menuTitle="판매 정산 계좌" path={'/mypage'}></Menu>
          <hr color={theme.colors.gray100} />
          {!accessToken ? (
            <div css={logout} onClick={login}>
              <Text typo="body2" color={theme.colors.gray300}>
                로그인
              </Text>
            </div>
          ) : (
            <div
              css={logout}
              onClick={() => {
                localStorage.removeItem('access');
                login();
              }}
            >
              <Text typo="body2" color={theme.colors.gray300}>
                로그아웃
              </Text>
            </div>
          )}
        </div>
      </div>
      <GNB />
    </div>
  );
}
