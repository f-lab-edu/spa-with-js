import './app.css';
import { Router } from './router';
import routes from './routes';

class App {
  private router: Router;
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
      const fullPath = window.location.href;
      await this.router.render(fullPath);
    });
  }
}

new App();
