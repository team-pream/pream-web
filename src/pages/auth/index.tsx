import { Route, Routes } from 'react-router-dom';
import KakaoCallback from './pages/kakao-callback';
import NotFound from '../notFound';

export default function Auth() {
  return (
    <Routes>
      <Route path="/kakao" element={<KakaoCallback />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
