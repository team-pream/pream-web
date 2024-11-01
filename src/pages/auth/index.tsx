import { Route, Routes } from 'react-router-dom';
import KakaoCallback from './pages/kakao-callback';
import Onboarding from './pages/onboarding';

export default function Auth() {
  return (
    <Routes>
      <Route path="/kakao" element={<KakaoCallback />} />
      <Route path="/onboarding" element={<Onboarding />} />
    </Routes>
  );
}
