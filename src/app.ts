import './app.css';
import { Router } from 'router';
import routes from './routes';
import { PageProps } from 'types/routeTypes';

class App {
  private router: Router<PageProps>;
  constructor() {
    this.router = new Router();
    this.initializeRoutes();
    this.addEventListeners();
  }

  // 주소 라우팅 등록
  initializeRoutes(): void {
    routes.forEach((route) => {
      this.router.addRoute(route.path, route.component);
    });
  }

  // 이벤트 등록
  addEventListeners(): void {
    document.addEventListener('DOMContentLoaded', async () => {
      const fullPath: string = window.location.href;
      await this.router.render(fullPath);
    });
  }
}

new App();
