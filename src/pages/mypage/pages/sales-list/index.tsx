import { AppBarBack } from '@/assets/icons';
import {
  mainWrapper,
  mainTitleBox,
  item,
  textContainer,
  topBox,
  bottomBox,
  opacityBox,
  image,
  content,
  contentTitle,
} from './index.style';
import { useNavigate } from 'react-router-dom';
import { AppBar, Layout, Text } from '@/components';
import theme from '@/styles/theme';
import { useGetProductsSalesListQuery } from '@/queries';

export default function SalesList() {
  const navigate = useNavigate();
  const { data } = useGetProductsSalesListQuery();

  return (
    <Layout>
      <AppBar
        prefix={
          <AppBarBack width="11" height="24" cursor="pointer" onClick={() => navigate('/mypage')} />
        }
      />
      <main css={mainWrapper}>
        <div css={mainTitleBox}>
          <Text typo="title1">판매내역</Text>
        </div>
        {data?.map((listData) => (
          <div css={item} key={listData.id}>
            <div css={content} onClick={() => navigate(`/products/${listData.id}`)}>
              <div css={opacityBox(listData.status)}>
                {listData.status === 'AVAILABLE' ? (
                  ''
                ) : listData.status === 'SOLD_OUT' ? (
                  <Text typo="body1" color="white">
                    판매완료
                  </Text>
                ) : (
                  <Text typo="body1" color="white">
                    예약중
                  </Text>
                )}
              </div>
              <img src={listData.images[0]} css={image} />
              <div css={textContainer}>
                <div css={topBox}>
                  <Text
                    typo="subtitle2"
                    color={
                      listData.status === 'AVAILABLE'
                        ? theme.colors.green200
                        : listData.status === 'SOLD_OUT'
                          ? theme.colors.gray300
                          : theme.colors.yellow100
                    }
                  >
                    {listData.status === 'AVAILABLE'
                      ? '판매중'
                      : listData.status === 'SOLD_OUT'
                        ? '판매완료'
                        : '예약중'}
                  </Text>
                  <Text typo="body1">{listData.createdAt.substring(2, 10).replace(/-/g, '.')}</Text>
                </div>
                <div css={bottomBox}>
                  <Text typo="body2" css={contentTitle}>
                    {listData.title}
                  </Text>
                  <Text typo="subtitle1">{listData.price.toLocaleString()}원</Text>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </Layout>
  );
}
