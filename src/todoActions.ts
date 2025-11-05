import { todos, Todo } from './todos';
import { renderTodos } from './todoRender';

// Add a new todo
export const addTodo = (text: string): void => {
  const newTodo: Todo = {
    id: Date.now(),
    text,
    completed: false,
  };
  todos.push(newTodo);
  renderTodos();
};

// Remove a todo by id
export const removeTodo = (id: number): void => {
  const index = todos.findIndex(todo => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    renderTodos();
  }
};

// Toggle completed status
export const toggleCompleted = (id: number): void => {
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    renderTodos();
  }
};

// Clear all completed todos
export const clearCompletedTodos = (): void => {
  for (let i = todos.length - 1; i >= 0; i--) {
    if (todos[i].completed) {
      todos.splice(i, 1);
    }
  }
  renderTodos();
};

// Edit a todo (existing)
export const editTodo = (id: number, newText: string): void => {
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.text = newText;
    renderTodos();
  }
};
