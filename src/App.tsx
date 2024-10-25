import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QueryProvider from '@/provider/query-provider';
import GlobalStyle from '@/styles/global-style';
import { Main, OnBoarding, Category, Login, Auth,  Detail, Address } from '@/pages';
import Purchase from './pages/purchase';

export default function App() {
  return (
    <QueryProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/products/:productId" element={<Detail />} />
          <Route path="/address" element={<Address />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth/kakao" element={<KakaoCallback />} />
          <Route path="/onboarding" element={<OnBoarding />} />
          <Route path="/category" element={<Category />} />
          <Route path="/purchase" element={<Purchase />} />
        </Routes>
      </BrowserRouter>
    </QueryProvider>
  );
}
