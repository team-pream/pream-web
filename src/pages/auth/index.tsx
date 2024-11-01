import { Route, Routes } from 'react-router-dom';
import KakaoCallback from './pages/kakao-callback';

export default function Auth() {
  return (
    <Routes>
      <Route path="/kakao" element={<KakaoCallback />} />
    </Routes>
  );
}
