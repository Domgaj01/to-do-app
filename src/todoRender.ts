// todoRender.ts
import { todos } from './todos';
import { removeTodo, editTodo } from './todoActions';

const todoList = document.getElementById('todo-list') as HTMLUListElement;

export const renderTodos = (): void => {
  if (!todoList) return;
  todoList.innerHTML = '';

  todos.forEach(todo => {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `
      <span>${todo.text}</span>
      <button class="removeBtn">Remove</button>
      <button class="editBtn">Edit</button>
    `;

    li.querySelector('.removeBtn')?.addEventListener('click', () => removeTodo(todo.id));
    li.querySelector('.editBtn')?.addEventListener('click', () => editTodo(todo.id));

    todoList.appendChild(li);
  });
};
