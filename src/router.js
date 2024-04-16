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
    let Component = this.routes[path];

    if (!Component) {
      Component = this.routes['*']; // 일치하는 경로가 없을 경우
    }

    const $app = document.getElementById('app');
    $app.innerHTML = ''; // 기존 컨텐츠를 클리어
    const componentInstance = new Component();
    $app.appendChild(await componentInstance.render());
  }
}
