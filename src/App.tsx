import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Main,
  Category,
  Login,
  Auth,
  Products,
  MyPage,
  Onboarding,
  Orders,
  NotFound,
} from '@/pages';
import QueryProvider from '@/provider/query-provider';
import GlobalStyle from '@/styles/global-style';
import { useState, useRef, useEffect } from 'react';
import { Dialog } from './components';
import { configureApiInterceptors } from './api/api';
import { ROUTE_PATHS } from './constants/routes';
import ScrollToTop from './pages/scroll';
export default function App() {
  const [dialogState, setDialogState] = useState({
    open: false,
    title: '',
    description: '',
  });
  // 다이얼로그가 열린 상태 유지용 ref
  const dialogOpenRef = useRef(false);
  const showDialog = (title: string, description: string) => {
    if (!dialogOpenRef.current) {
      setDialogState({ open: true, title, description });
      dialogOpenRef.current = true; // 다이얼로그가 열렸음을 기록
    }
  };
  const closeDialog = () => {
    setDialogState({ open: false, title: '', description: '' });
    window.location.href = ROUTE_PATHS.LOGIN;
    dialogOpenRef.current = false; // 다이얼로그가 닫혔음을 기록
  };
  // API Interceptors를 최초 렌더링 시 한 번만 설정
  useEffect(() => {
    configureApiInterceptors(showDialog);
  }, []); // 빈 의존성 배열로 최초 렌더 시 한 번만 실행
  return (
    <>
      {dialogState.open && (
        <Dialog
          type="error"
          title={dialogState.title}
          description={dialogState.description}
          primaryActionLabel="OK"
          onPrimaryAction={closeDialog} // 버튼 클릭 시 다이얼로그 닫기
        />
      )}
      <QueryProvider>
        <GlobalStyle />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/auth/*" element={<Auth />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/categories" element={<Category />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mypage/*" element={<MyPage />} />
            <Route path="/products/*" element={<Products />} />
            <Route path="/orders/*" element={<Orders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryProvider>
    </>
  );
}
