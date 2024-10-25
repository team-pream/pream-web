import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QueryProvider from '@/provider/query-provider';
import GlobalStyle from '@/styles/global-style';
import { Login, Main, OnBoarding, Category } from '@/pages';
import KakaoCallback from './pages/auth/pages/kakao';

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
        </Routes>
      </BrowserRouter>
    </QueryProvider>
  );
}
