import { Route, Routes } from 'react-router-dom';
import { Complete, Failure, Order } from './pages';

export default function Orders() {
  return (
    <Routes>
      <Route path="/:productId" element={<Order />} />
      <Route path="/complete" element={<Complete />} />
      <Route path="/failure" element={<Failure />} />
    </Routes>
  );
}
