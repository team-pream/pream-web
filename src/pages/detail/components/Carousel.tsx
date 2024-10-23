import React, { useState } from 'react';

// 이미지 파일을 import합니다.
import img1 from '../../../assets/images/img1.jpg';
import img2 from '../../../assets/images/img2.jpg';
import img3 from '../../../assets/images/img3.jpg';
import img4 from '../../../assets/images/img4.jpg';

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
    <div
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        margin: '0 auto',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          display: 'flex',
          transition: 'transform 0.5s ease',
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
          backgroundColor: '#ddd',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: `${progressBar}px`,
            height: '100%',
            backgroundColor: '#72DACD',
            transition: 'left 0.5s ease',
            left: `${progressPosition}px`,
          }}
        ></div>
      </div>
      <button
        onClick={handlePrev}
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          background: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '30px',
          height: '30px',
          cursor: 'pointer',
        }}
      >
        ‹
      </button>

      <button
        onClick={handleNext}
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          background: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '30px',
          height: '30px',
          cursor: 'pointer',
        }}
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
