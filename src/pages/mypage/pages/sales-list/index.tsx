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
  loader,
} from './index.style';
import { useNavigate } from 'react-router-dom';
import { AppBar, Layout, Text } from '@/components';
import theme from '@/styles/theme';
<<<<<<< HEAD
import { useGetProductsSalesListQuery } from '@/queries';
=======
import { useGetProductsSalesListQuery } from '@/queries/products';
import { MoonLoader } from 'react-spinners';
>>>>>>> 81be93e (feat: 상품 목록, 판매내역 페이지 로더 적용)

export default function SalesList() {
  const navigate = useNavigate();
  const { data, isLoading } = useGetProductsSalesListQuery();

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
        {isLoading ? (
          <div css={loader}>
            <MoonLoader size={50} color="#72DACD" speedMultiplier={0.5} />
          </div>
        ) : (
          <>
            {data?.map((listData) => (
              <div css={item} key={listData.id}>
                <div css={content}>
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
                      <Text typo="body1">
                        {listData.createdAt.substring(2, 10).replace(/-/g, '.')}
                      </Text>
                    </div>
                    <div css={bottomBox} onClick={() => navigate(`/products/${listData.id}`)}>
                      <Text typo="body2" css={contentTitle}>
                        {listData.title}
                      </Text>
                      <Text typo="subtitle1">{listData.price.toLocaleString()}원</Text>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </main>
    </Layout>
  );
}
