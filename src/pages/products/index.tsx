import { Route, Routes } from 'react-router-dom';
import { Detail, Products } from './pages';

export default function MyPage() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/:productId" element={<Detail />} />
    </Routes>
  );
}
