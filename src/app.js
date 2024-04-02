import Todo from './components/Todo';
import './app.css';

class App {
  constructor() {
    this.app = document.createElement('div');
    this.app.id = 'app';
  }

  async render() {
    const todoProps = {
      todoId: 1,
    };

    const todoComponent = new Todo(todoProps);
    await todoComponent.fetchTodoData();

    this.app.appendChild(todoComponent.render());

    return this.app;
  }
}

const appComponent = new App();

(async () => {
  const $app = await appComponent.render();
  document.body.appendChild($app);
})();
