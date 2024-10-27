import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QueryProvider from '@/provider/query-provider';
import GlobalStyle from '@/styles/global-style';
import { Main, OnBoarding, Category, Login, Auth, Products, Purchase } from '@/pages';

export default function App() {
  return (
    <QueryProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/onboarding" element={<OnBoarding />} />
          <Route path="/category" element={<Category />} />
          <Route path="/products" element={<Products />} />
          <Route path="/mypage/purchase/history" element={<Purchase />} />
          <Route path="/mypage/purchase/history" element={<Purchase />} />
        </Routes>
      </BrowserRouter>
    </QueryProvider>
  );
}
