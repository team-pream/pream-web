import { useEffect, useRef, useState } from 'react';
import { loadKakaoMapScript } from '@/libs/kako-map';
import { buttonWrapper, currentLocationButton, innerWrapper } from './index.styles';
interface KakaoMapProps {
  latitude: number;
  longitude: number;
  onMarkerDragEnd: (lat: number, lng: number) => void; // 마커 드래그 종료 시 호출될 함수
}

const KakaoMap = ({ latitude, longitude, onMarkerDragEnd }: KakaoMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<kakao.maps.Map | null>(null); // kakao.maps.Map 타입 지정
  const [marker, setMarker] = useState<kakao.maps.Marker | null>(null); // kakao.maps.Marker 타입 지정

  useEffect(() => {
    loadKakaoMapScript()
      .then(() => {
        if (mapRef.current && window.kakao && window.kakao.maps) {
          const container = mapRef.current;
          const options = {
            center: new window.kakao.maps.LatLng(latitude, longitude),
            level: 3,
          };
          const mapInstance = new window.kakao.maps.Map(container, options);

          const initialMarkerPosition = new window.kakao.maps.LatLng(latitude, longitude);
          const markerInstance = new window.kakao.maps.Marker({
            position: initialMarkerPosition,
            draggable: true,
          });
          markerInstance.setMap(mapInstance);

          // 마커 드래그 종료 이벤트 핸들러 등록
          window.kakao.maps.event.addListener(markerInstance, 'dragend', () => {
            const position = markerInstance.getPosition();
            onMarkerDragEnd(position.getLat(), position.getLng());
          });

          setMap(mapInstance); // kakao.maps.Map 타입을 가진 객체 설정
          setMarker(markerInstance); // kakao.maps.Marker 타입을 가진 객체 설정
        }
      })
      .catch((error) => {
        console.error('Kakao Maps API 로드 중 오류 발생:', error);
      });
  }, [latitude, longitude, onMarkerDragEnd]);

  const moveToCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const newCenter = new window.kakao.maps.LatLng(latitude, longitude);

        if (map && marker) {
          map.setCenter(newCenter); // 지도 중심 이동
          marker.setPosition(newCenter); // 마커 위치도 함께 이동
          onMarkerDragEnd(latitude, longitude); // 현재 위치의 좌표로 주소 갱신
        }
      });
    } else {
      alert('현재 위치를 사용할 수 없습니다.');
    }
  };

  return (
    <div css={buttonWrapper}>
      <div ref={mapRef} css={innerWrapper} />
      <button onClick={moveToCurrentLocation} css={currentLocationButton}>
        현재 위치로 이동
      </button>
    </div>
  );
};

export default KakaoMap;
