import { getTodo } from '../api/todoService';
import '../styles/todo.css';
class Todo {
  constructor(props) {
    this.todoId = props.todoId;
    this.todoData = null;
  }

  async fetchTodoData() {
    try {
      this.todoData = await getTodo(this.todoId);
      this.render();
    } catch (error) {
      console.error('Todo error :', error);
    }
  }

  render() {
    const $todo = document.createElement('div');
    if (this.todoData) {
      $todo.innerHTML = `
        <h1>TODO</h1>
        <div class="desc">
          id:${this.todoData.id}<br/>
          todo: ${this.todoData.title}<br/>
          complete: ${this.todoData.completed ? 'Y' : 'N'}
        </div>
      `;
    } else {
      $todo.innerText = 'Loading...';
    }
    return $todo;
  }
}
export default Todo;
