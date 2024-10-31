import React, { useCallback, useEffect, useState } from 'react';
import {
  carouselWrapper,
  carouselImg,
  leftButton,
  rightButton,
  progressBarWrapper,
  progressBar,
} from './index.style';

interface CarouselProps {
  images: string[]; // 이미지 배열
  width?: number; // 슬라이드 하나의 너비
  height?: number; // 슬라이드 높이
  showButtons?: boolean; // 버튼 표시 여부
  autoPlay?: boolean; // 자동 재생 여부
  autoPlayInterval?: number; // 자동 재생 시간 간격
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  width = 480,
  height = 408,
  showButtons = true,
  autoPlay = false,
  autoPlayInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);
  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  // 자동 재생 기능
  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(handleNext, autoPlayInterval);
      return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
    }
  }, [autoPlay, autoPlayInterval, handleNext]);

  // progress bar의 너비와 위치 계산
  const progressBarWidth = 238 / images.length;
  const progressPosition = (currentIndex / (images.length - 1)) * (238 - progressBarWidth);

  return (
    <div css={carouselWrapper} style={{ maxWidth: `${width}px` }}>
      <div
        css={carouselImg}
        style={{
          width: `${images.length * width}px`,
          transform: `translateX(${-currentIndex * width}px)`,
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            style={{
              height: `${height}px`,
              width: `${width}px`,
              borderRadius: '0px 0px 20px 20px',
            }}
          />
        ))}
      </div>

      {images.length > 1 && (
        <div css={progressBarWrapper}>
          <div
            css={progressBar}
            style={{ width: `${progressBarWidth}px`, left: `${progressPosition}px` }}
          />
        </div>
      )}

      {showButtons && images.length > 1 && (
        <>
          <button onClick={handlePrev} css={leftButton}>
            ‹
          </button>
          <button onClick={handleNext} css={rightButton}>
            ›
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
