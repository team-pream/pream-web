import { Route, Routes } from 'react-router-dom';
import { ProductList, Upload } from './pages';

export default function Products() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  );
}
