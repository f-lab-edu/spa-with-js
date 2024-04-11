import List from './pages/list';
import Detail from './pages/detail';
import './app.css';
import { Router } from './router';

class App {
  constructor() {
    this.router = new Router();
    this.initializeRoutes();
    this.addEventListeners();
  }

  // 주소 라우팅 등록
  initializeRoutes() {
    this.router.addRoute('/', List);
    this.router.addRoute('/list', List);
    this.router.addRoute('/detail', Detail);
  }

  // 이벤트 등록
  addEventListeners() {
    document.addEventListener('DOMContentLoaded', async () => {
      await this.router.render(window.location.pathname);
    });
  }
}

new App();
