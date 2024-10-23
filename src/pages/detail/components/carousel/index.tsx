import React, { useState } from 'react';
import theme from '@/styles/theme';
import { CarouselWrapper, CarouselImg, LeftBtn, RightBtn } from './index.style';
// 이미지 파일을 import합니다.
import img1 from '../../../../assets/images/img1.jpg';
import img2 from '../../../../assets/images/img2.jpg';
import img3 from '../../../../assets/images/img3.jpg';
import img4 from '../../../../assets/images/img4.jpg';

const images = [img1, img2, img3, img4];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 슬라이드 인덱스

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? prevIndex : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? prevIndex : prevIndex + 1));
  };

  const progressBar = 238 / images.length;
  const progressPosition = (currentIndex / (images.length - 1)) * (238 - progressBar);

  return (
    <div css={CarouselWrapper}>
      <div
        css={CarouselImg}
        style={{
          width: `${images.length * 390}px`,
          transform: `translateX(${-currentIndex * 390}px)`,
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            style={{
              width: '390px',
              height: '332px',
              objectFit: 'cover',
              borderRadius: '0px 0px 20px 20px',
            }}
          />
        ))}
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '238px',
          height: '2px',
          backgroundColor: `${theme.colors.gray100}`,
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: `${progressBar}px`,
            height: '100%',
            backgroundColor: `${theme.colors.green200}`,
            transition: 'left 0.5s ease',
            left: `${progressPosition}px`,
          }}
        ></div>
      </div>
      <button onClick={handlePrev} css={LeftBtn}>
        ‹
      </button>

      <button onClick={handleNext} css={RightBtn}>
        ›
      </button>
    </div>
  );
};

export default Carousel;
