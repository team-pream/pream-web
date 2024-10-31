import { Route, Routes } from 'react-router-dom';
import { MyInfo, UserEdit } from './pages';

export default function Mypage() {
  return (
    <Routes>
      <Route path="/" element={<MyInfo />} />
      <Route path="/user/edit" element={<UserEdit />} />
    </Routes>
  );
}
