import { Route, Routes } from 'react-router-dom';
import { Detail, Products, Upload } from './pages';

export default function MyPage() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/:productId" element={<Detail />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  );
}
