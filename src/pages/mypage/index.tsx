import { Route, Routes } from 'react-router-dom';
import { MyInfo, PetProfile } from './pages';

export default function Mypage() {
  return (
    <Routes>
      <Route path="/" element={<MyInfo />} />
      <Route path="/pet-profile" element={<PetProfile />} />
    </Routes>
  );
}
