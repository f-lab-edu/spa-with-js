import './app.css';
import Router from './router';
function App() {
  const $app = document.getElementById('app');
  const { navigate, routes } = Router;

  // 현재 주소에 해당하는 컴포넌트 렌더링
  const render = () => {
    const path = window.location.pathname;
    const component = routes[path] || routes['/404'];
    $app.innerHTML = component();
  };

  const onClickLink = (event) => {
    const target = event.target;
    if (target.tagName === 'A') {
      event.preventDefault();
      navigate(target.getAttribute('href'));
      render();
    }
  };

  document.addEventListener('click', (event) => onClickLink(event));
  render();

  return $app;
}

document.body.appendChild(App());
