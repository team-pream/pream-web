import { AppBarBack } from '@/assets/icons';
import {
  mainWrapper,
  mainTitleBox,
  item,
  textBox,
  image,
  date,
  content,
  contentTitle,
} from './index.style';
import { useNavigate } from 'react-router-dom';
import { AppBar, Layout, Text } from '@/components';
import theme from '@/styles/theme';

export default function Sales() {
  // 더미데이터
  const items = Array.from({ length: 6 }, () => ({
    status: '판매중',
    title: '아이캣유 제품',
    price: '620,000원',
    date: '24.10.24',
  }));

  const navigate = useNavigate();

  return (
    <Layout>
      <AppBar
        prefix={
          <AppBarBack
            width="11"
            height="24"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/mypage')}
          />
        }
      />
      <main css={mainWrapper}>
        <div css={mainTitleBox}>
          <Text typo="title1">판매내역</Text>
        </div>
        {items.map((data, index) => (
          <div css={item} key={index}>
            <div css={content}>
              <img src="/images/sampleImage2.png" css={image} />
              <div css={textBox} onClick={() => navigate('/products/:productId')}>
                <Text typo="subtitle2" color={theme.colors.green200}>
                  {data.status}
                </Text>
                <Text typo="body2" css={contentTitle}>
                  {data.title}
                </Text>
                <Text typo="subtitle1">{data.price}</Text>
              </div>
            </div>
            <Text typo="body1" css={date}>
              {data.date}
            </Text>
          </div>
        ))}
      </main>
    </Layout>
  );
}
