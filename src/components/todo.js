import { getTodo } from '../api/todoService';
import '../styles/todo.css';
class Todo {
  constructor(props) {
    this.todoId = props.todoId;
    this.todo = null;
  }

  async fetchTodoData() {
    try {
      this.todo = await getTodo(this.todoId);
      this.render();
    } catch (error) {
      console.error('Todo error :', error);
    }
  }

  render() {
    const $todo = document.createElement('div');
    if (this.todo) {
      $todo.innerHTML = `
        <h1>TODO</h1>
        <div class="desc">
          id:${this.todo.id}<br/>
          todo: ${this.todo.title}<br/>
          complete: ${this.todo.completed ? 'Y' : 'N'}
        </div>
      `;
    } else {
      $todo.innerText = 'Loading...';
    }
    return $todo;
  }
}
export default Todo;
