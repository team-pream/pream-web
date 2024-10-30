import { AppBarBack, UploadPlus } from '@/assets/icons';
import { AppBar, Button, ChipRadioGroup, Input, Layout, RadioGroup, Text } from '@/components';
import { useGetProductsCategoryQuery } from '@/queries/category';
import { Category } from '@/types/category';
import {
  fixedCTAButtonWrapper,
  hr,
  image,
  images,
  nowrap,
  productInfo,
  textarea,
  uploadButton,
  wrap,
  wrapper,
} from './index.styles';
import Info from './components/info';
import theme from '@/styles/theme';

export default function Upload() {
  const { data: categories } = useGetProductsCategoryQuery();

  return (
    <Layout>
      <AppBar prefix={<AppBarBack height="24px" />} />

      <section css={wrapper}>
        <form>
          <section css={wrap}>
            <Text typo="title1" color={theme.colors.black}>
              판매
            </Text>
            <hr css={hr} />
          </section>

          <section css={productInfo}>
            <div css={nowrap}>
              <Info title="상품 정보">
                <div css={images}>
                  <button css={uploadButton}>
                    <UploadPlus width="24px" height="24px" />
                  </button>
                  <div css={image} />
                  <div css={image} />
                  <div css={image} />
                  <div css={image} />
                  <div css={image} />
                  <div css={image} />
                </div>
              </Info>
            </div>

            <div css={wrap}>
              <Info title="상품 상태">
                <RadioGroup
                  items={[
                    { value: 'NEW', label: '새상품' },
                    { value: 'SLIGHTLY_USED', label: '사용감 적음' },
                    { value: 'HEAVILY_USED', label: '사용감 많음' },
                  ]}
                  onChange={() => {}}
                />
              </Info>
            </div>

            <div css={wrap}>
              <Info title="판매 희망가">
                <Input prefix={<Text typo="body5">₩</Text>} />
              </Info>
            </div>

            <div css={nowrap}>
              <Info title="카테고리">
                <ChipRadioGroup
                  items={categories?.slice(1).map((category: Category) => ({
                    value: category.id,
                    label: category.name,
                  }))}
                />
              </Info>
            </div>

            <div css={wrap}>
              <Info title="내용">
                <textarea
                  css={textarea}
                  placeholder="상세 내용을 입력해 주세요"
                  spellCheck={false}
                />
              </Info>
            </div>
          </section>

          <div css={wrap}>
            <hr css={hr} />
            <Info title="추가 정보">
              <Input label="오픈채팅방" placeholder="카카오톡 오픈채팅방 URL을 입력해 주세요" />
            </Info>
          </div>
        </form>
      </section>

      <div css={fixedCTAButtonWrapper}>
        <Button type="submit" size="xl" disabled>
          판매하기
        </Button>
      </div>
    </Layout>
  );
}
