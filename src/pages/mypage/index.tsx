import { Route, Routes } from 'react-router-dom';
import { Address, PetProfile, PurchaseList, SalesList, UserProfile } from './pages';

export default function MyPage() {
  return (
    <Routes>
      <Route path="/users/edit" element={<UserProfile />} />
      <Route path="/pets/edit" element={<PetProfile />} />
      <Route path="/sales-list" element={<SalesList />} />
      <Route path="/purchase-list" element={<PurchaseList />} />
      <Route path="/address/edit" element={<Address />} />
    </Routes>
  );
}
