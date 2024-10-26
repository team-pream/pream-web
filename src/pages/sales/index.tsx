import {
  wrapper,
  mainTitleBox,
  mainTitle,
  item,
  textBox,
  image,
  date,
  content,
  salesStatus,
  contentTitle,
  price,
} from './index.style';

export default function Sales() {
  // 더미데이터
  const items = Array.from({ length: 6 }, () => ({
    status: '판매중',
    title: '아이캣유 제품',
    price: '620,000원',
    date: '24.10.24',
  }));

  return (
    <div css={wrapper}>
      <header>header</header>
      <main>
        <div css={mainTitleBox}>
          <span css={mainTitle}>판매내역</span>
        </div>
        {items.map((data, index) => (
          <div css={item} key={index}>
            <div css={content}>
              <img src="/images/sampleImage2.png" css={image} />
              <div css={textBox}>
                <span css={salesStatus}>{data.status}</span>
                <span css={contentTitle}>{data.title}</span>
                <span css={price}>{data.price}</span>
              </div>
            </div>
            <div css={date}>
              <span>{data.date}</span>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
