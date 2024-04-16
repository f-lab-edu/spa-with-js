import './app.css';
import { Router } from './router';
import routes from './routes';

class App {
  constructor() {
    this.router = new Router();
    this.initializeRoutes();
    this.addEventListeners();
  }

  // 주소 라우팅 등록
  initializeRoutes() {
    routes.forEach((route) => {
      this.router.addRoute(route.path, route.component);
    });
  }

  // 이벤트 등록
  addEventListeners() {
    document.addEventListener('DOMContentLoaded', async () => {
      await this.router.render(window.location.pathname);
    });
  }
}

new App();
