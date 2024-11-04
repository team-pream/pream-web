import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main, Category, Login, Auth, Products, MyPage, Onboarding, Orders } from '@/pages';
import QueryProvider from '@/provider/query-provider';
import GlobalStyle from '@/styles/global-style';

export default function App() {
  return (
    <QueryProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage/*" element={<MyPage />} />
          <Route path="/products/*" element={<Products />} />
          <Route path="/orders/*" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </QueryProvider>
  );
}
