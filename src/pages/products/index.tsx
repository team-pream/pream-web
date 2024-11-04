import { Route, Routes } from 'react-router-dom';
import { Detail, Edit, Products, Upload } from './pages';

export default function MyPage() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/:productId" element={<Detail />} />
      <Route path="/:productId/edit" element={<Edit />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  );
}
