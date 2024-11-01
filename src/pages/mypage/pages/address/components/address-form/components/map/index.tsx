import { useEffect, useRef } from 'react';
import { loadKakaoMapScript } from '@/libs/kako-map';

interface KakaoMapProps {
  latitude: number;
  longitude: number;
}

const KakaoMap = ({ latitude, longitude }: KakaoMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadKakaoMapScript()
      .then(() => {
        if (mapRef.current && window.kakao && window.kakao.maps) {
          const container = mapRef.current;
          const options = {
            center: new window.kakao.maps.LatLng(latitude, longitude),
            level: 3,
          };
          const map = new window.kakao.maps.Map(container, options);
          const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
          const marker = new window.kakao.maps.Marker({ position: markerPosition });
          marker.setMap(map);
        }
      })
      .catch((error) => {
        console.error('Kakao Maps API 로드 중 오류 발생:', error);
      });
  }, [latitude, longitude]);

  return <div ref={mapRef} style={{ width: '100%', height: '200px', margin: '10px 0 15px' }} />;
};

export default KakaoMap;
