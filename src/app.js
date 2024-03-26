function App() {
  const $app = document.getElementById('app');
  $app.innerHTML = '<h1>SPA 동작완료</h1>';

  return $app;
}

document.body.appendChild(App());
