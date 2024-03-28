import ListPage from './pages/listPage';
import DetailPage from './pages/detailPage';
import MainPage from './pages/mainPage';
import NotFoundPage from './pages/notFoundPage';
function Router() {
  const routes = {
    '/': MainPage,
    '/list': ListPage,
    '/detail': DetailPage,
    '/404': NotFoundPage,
  };

  // URL 변경 시 호출
  const navigate = (path) => {
    // 상단 url 주소 바꿈
    window.history.pushState({}, path, window.location.origin + path);
  };

  return { routes, navigate };
}

export default Router();
