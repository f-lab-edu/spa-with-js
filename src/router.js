export class Router {
  constructor() {
    this.routes = {};
  }

  // 라우터 등록
  addRoute(path, component) {
    this.routes[path] = component;
  }

  async render(fullPath) {
    const url = new URL(fullPath, window.location.origin);
    const pathname = url.pathname;
    const searchParams = new URLSearchParams(url.search);

    let Component = this.routes[pathname];

    if (!Component) {
      Component = this.routes['*']; // 일치하는 경로가 없을 경우
    }

    const $app = document.getElementById('app');
    $app.innerHTML = ''; // 기존 컨텐츠를 클리어
    const componentInstance = new Component({ searchParams });
    $app.appendChild(await componentInstance.render());
  }
}
