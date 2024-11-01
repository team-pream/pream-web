import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QueryProvider from '@/provider/query-provider';
import GlobalStyle from '@/styles/global-style';
import { Main, Category, Login, Auth, Products, MyPage } from '@/pages';

export default function App() {
  return (
    <QueryProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/products/*" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </QueryProvider>
  );
}
