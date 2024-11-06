import { Route, Routes } from 'react-router-dom';
import { Detail, Edit, Products, Upload, Search } from './pages';
import NotFound from '../notFound';

export default function MyPage() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/:productId" element={<Detail />} />
      <Route path="/:productId/edit" element={<Edit />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/search" element={<Search />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
