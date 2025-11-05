// todoActions.ts
import { Todo, todos } from './todos';
import { renderTodos } from './todoRender';

export const addTodo = (text: string): Todo => {
  const newTodo: Todo = {
    id: Date.now(),
    text,
    completed: false,
  };
  todos.push(newTodo);
  renderTodos();
  return newTodo;
};

export const removeTodo = (id: number): void => {
  const index = todos.findIndex(todo => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    renderTodos();
  }
};

export const editTodo = (id: number, newText?: string): void => {
  const todo = todos.find(todo => todo.id === id);
  if (!todo) return;

  const text = newText ?? prompt('Edit todo', todo.text);
  if (text && text.trim() !== '') {
    todo.text = text.trim();
    renderTodos();
  }
};
