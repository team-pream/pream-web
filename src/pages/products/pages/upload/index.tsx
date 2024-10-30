import { AppBarBack, UploadPlus } from '@/assets/icons';
import { AppBar, Input, Layout, Text } from '@/components';
import { hr, image, images, productInfo, textarea, uploadButton, wrapper } from './index.styles';
import theme from '@/styles/theme';
import Info from './components/info';

export default function Upload() {
  return (
    <Layout>
      <AppBar prefix={<AppBarBack height="24px" />} />

      <section css={wrapper}>
        <Text typo="title1" color={theme.colors.black}>
          판매
        </Text>
        <hr css={hr} />

        <section css={productInfo}>
          <Info title="상품 정보">
            <div css={images}>
              <button css={uploadButton}>
                <UploadPlus width="24px" height="24px" />
              </button>
              <div css={image} />
              <div css={image} />
              <div css={image} />
            </div>
          </Info>

          <Info title="상품 상태">
            <></>
          </Info>

          <Info title="판매 희망가">
            <Input type="number" />
          </Info>

          <Info title="카테고리">
            <></>
          </Info>

          <Info title="내용">
            <textarea css={textarea} placeholder="상세 내용을 입력해 주세요" />
          </Info>
        </section>

        <hr css={hr} />
        <Info title="추가 정보">
          <Input label="오픈채팅방" placeholder="카카오톡 오픈채팅방 URL을 입력해 주세요" />
        </Info>
      </section>
    </Layout>
  );
}
