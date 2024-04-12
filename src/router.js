export class Router {
  constructor(notFoundComponent) {
    this.routes = {};
    this.notFoundComponent = notFoundComponent;
  }

  // 라우터 등록
  addRoute(path, component) {
    this.routes[path] = component;
  }

  async render(path) {
    const Component = this.routes[path] || this.notFoundComponent;
    const $app = document.getElementById('app');
    $app.innerHTML = ''; // 기존 컨텐츠를 클리어
    const componentInstance = new Component();
    $app.appendChild(await componentInstance.render());
  }
}
