import { useEffect, useRef, useState } from 'react';
import { loadKakaoMapScript } from '@/libs/kako-map';

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
    <div style={{ position: 'relative', width: '100%', height: '200px', margin: '10px 0 15px' }}>
      <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
      <button
        onClick={moveToCurrentLocation}
        style={{
          position: 'absolute',
          right: '10px',
          bottom: '10px',
          backgroundColor: 'white',
          border: '1px solid #ccc',
          borderRadius: '4px',
          padding: '5px 10px',
          cursor: 'pointer',
          zIndex: 10,
          fontSize: '12px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        }}
      >
        현재 위치로 이동
      </button>
    </div>
  );
};

export default KakaoMap;
