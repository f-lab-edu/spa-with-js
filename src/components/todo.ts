import { getTodo } from '../api/todoService';
import '../styles/todo.css';
import { ErrorResponse } from 'types/api';

type TodoProps = {
  todoId: number;
};

class Todo {
  todoId: number;
  todo: TodoTypes.Todo | null = null;
  constructor(props: TodoProps) {
    this.todoId = props.todoId;
  }

  async fetchTodo() {
    this.todo = await getTodo(this.todoId, (e: ErrorResponse) =>
      console.log('fetchTodoError: ', e),
    );
    this.render();
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
      $todo.innerText = '해당 TODO 없음';
    }
    return $todo;
  }
}
export default Todo;
