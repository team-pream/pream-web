import { useCallback, useEffect, useState } from 'react';
import {
  wrapper,
  carouselImage,
  leftButton,
  rightButton,
  progressBarWrapper,
  progressBar,
  image,
} from './index.style';
import { colors } from '@/styles/colors';

interface CarouselProps {
  images: string[]; // 이미지 배열
  width?: number; // 슬라이드 하나의 너비
  height?: number; // 슬라이드 높이
  fullWidth?: boolean; // 전체 너비 사용 여부
  showButtons?: boolean; // 버튼 표시 여부
  autoPlay?: boolean; // 자동 재생 여부
  autoPlayInterval?: number; // 자동 재생 시간 간격
  progressBarColor?: string;
}

export function Carousel({
  images,
  width = 480,
  height = 408,
  fullWidth = false,
  showButtons = true,
  autoPlay = false,
  autoPlayInterval = 3000,
  progressBarColor = `${colors.black}`,
}: CarouselProps) {
  const screenWidth = window.innerWidth > 480 ? 480 : window.innerWidth;

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
    <div css={wrapper({ maxWidth: fullWidth ? '100%' : `${width}px` })}>
      <div
        css={carouselImage({
          width: fullWidth ? images.length * screenWidth : images.length * width,
          transform: `translateX(${fullWidth ? -currentIndex * screenWidth : -currentIndex * width}px)`,
        })}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            css={image({ width: fullWidth ? screenWidth : width, height })}
          />
        ))}
      </div>

      {images.length > 1 && (
        <div css={progressBarWrapper}>
          <div css={progressBar(progressBarColor, progressBarWidth, progressPosition)} />
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
}
