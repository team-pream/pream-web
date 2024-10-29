import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QueryProvider from '@/provider/query-provider';
import GlobalStyle from '@/styles/global-style';
import { Main, OnBoarding, Category, Login, Auth, Products, Detail, Address } from '@/pages';

export default function App() {
  return (
    <QueryProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/products/:productId" element={<Detail />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/address" element={<Address />} />
          <Route path="/login" element={<Login />} />
          <Route path="/onboarding" element={<OnBoarding />} />
          <Route path="/category" element={<Category />} />
          <Route path="/purchase" element={<Purchase />} />
        </Routes>
      </BrowserRouter>
    </QueryProvider>
  );
}
