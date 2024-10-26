declare global {
  interface Window {
    kakao: {
      maps: {
        Map: new (container: HTMLElement, options: { center: KakaoLatLng; level: number }) => void;
        LatLng: new (latitude: number, longitude: number) => KakaoLatLng;
        Marker: new (options: { position: KakaoLatLng }) => void;
        load: (callback: () => void) => void;
      };
    };
    daum: {
      Postcode: new (options: { oncomplete: (data: AddressData) => void }) => { open: () => void };
    };
  }
}

export {}; // 글로벌 선언 시 필요
