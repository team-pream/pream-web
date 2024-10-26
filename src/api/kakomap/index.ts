interface KakaoLatLng {
  getLat: () => number;
  getLng: () => number;
}

interface KakaoMaps {
  Map: new (container: HTMLElement, options: { center: KakaoLatLng; level: number }) => KakaoMap;
  LatLng: new (latitude: number, longitude: number) => KakaoLatLng;
  Marker: new (options: { position: KakaoLatLng }) => KakaoMarker;
  load: (callback: () => void) => void;
}

interface KakaoMap {
  setCenter: (latlng: KakaoLatLng) => void;
  setLevel: (level: number) => void;
}

interface KakaoMarker {
  setMap: (map: KakaoMap | null) => void;
}

declare global {
  interface Window {
    kakao: {
      maps: KakaoMaps;
    };
  }
}

export const loadKakaoMapScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (document.getElementById('kakao-map-script')) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.id = 'kakao-map-script';
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP}&libraries=services,clusterer,drawing&autoload=false`;
    script.async = true;
    script.onload = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => resolve());
      } else {
        reject(new Error('Kakao 지도 스크립트 로드 실패'));
      }
    };
    script.onerror = () => reject(new Error('Kakao 지도 스크립트 로드 실패'));
    document.body.appendChild(script);
  });
};

export const initializeMap = (
  container: HTMLElement,
  latitude: number,
  longitude: number
): KakaoMap | undefined => {
  if (!window.kakao || !window.kakao.maps) {
    console.error('Kakao Maps API가 로드되지 않았습니다.');
    return;
  }

  const center = new window.kakao.maps.LatLng(latitude, longitude);
  const options = { center, level: 3 };

  const map = new window.kakao.maps.Map(container, options);
  return map;
};
