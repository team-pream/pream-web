import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QueryProvider from '@/provider/query-provider';
import GlobalStyle from '@/styles/global-style';
import { Login, Main, OnBoarding, Category, Products } from '@/pages';
import KakaoCallback from './pages/auth/pages/kakao';
// import { ROUTE_PATHS } from './constants/routes';

export default function App() {
  return (
    <QueryProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth/kakao" element={<KakaoCallback />} />
          <Route path="/onboarding" element={<OnBoarding />} />
          <Route path="/category" element={<Category />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </QueryProvider>
  );
}
