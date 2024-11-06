import { Route, Routes } from 'react-router-dom';
import { Complete, Failure, Order } from './pages';
import NotFound from '../notFound';

export default function Orders() {
  return (
    <Routes>
      <Route path="/:productId" element={<Order />} />
      <Route path="/complete" element={<Complete />} />
      <Route path="/failure" element={<Failure />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
