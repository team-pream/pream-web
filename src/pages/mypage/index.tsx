import { AppBar, GNB, Text } from '@/components';
import {
  myAccountWrapper,
  mypageWrapper,
  myPetWrapper,
  myTradeWrapper,
  profileAddWrapper,
  wrapper,
} from './index.styles';
import theme from '@/styles/theme';

export default function Mypage() {
  return (
    <div css={wrapper}>
      <AppBar></AppBar>
      <div css={mypageWrapper}>
        <Text typo="title1">마이페이지</Text>
        <div css={myPetWrapper}>
          <div css={profileAddWrapper}>
            <Text typo="body2">당신의 댕냥이를 등록해주세요</Text>
          </div>
        </div>
        <div css={myTradeWrapper}>
          <Text typo="subtitle1">나의 거래 내역</Text>
          <hr color={theme.colors.black} />
          <div>
            <Text typo="body2">판매내역</Text>
          </div>
          <hr color={theme.colors.gray100} />
          <div>
            <Text typo="body2">구매내역</Text>
          </div>
        </div>
        <div css={myAccountWrapper}>
          <Text typo="subtitle1">나의 계정 정보</Text>
          <hr color={theme.colors.black} />
          <div>
            <Text typo="body2">주소 관리</Text>
          </div>
          <hr color={theme.colors.gray100} />
          <div>
            <Text typo="body2">간편결제 관리</Text>
          </div>
          <hr color={theme.colors.gray100} />
          <div>
            <Text typo="body2">판매 정산 계좌</Text>
          </div>
          <hr color={theme.colors.gray100} />
          <div>
            <Text typo="body2" color={theme.colors.gray300}>
              로그아웃
            </Text>
          </div>
        </div>
      </div>
      <GNB />
    </div>
  );
}
