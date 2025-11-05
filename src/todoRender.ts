  import { todos } from './todos';
  import { removeTodo, editTodo, toggleCompleted, toggleFavorite} from './todoActions';

  const todoList = document.getElementById('todo-list') as HTMLUListElement;

  export const renderTodos = (): void => {
    todoList.innerHTML = '';

    todos.forEach(todo => {
      const li = document.createElement('li');
      li.className = 'todo-item';
      if (todo.completed) li.style.textDecoration = 'line-through';
    
      li.innerHTML = `
        <span>${todo.text}</span>
        <div>
          <button class="toggle-btn">Toggle</button>
          <button class="edit-btn">Edit</button>
          <button class="remove-btn">Remove</button>
          <button class="favorite-btn">${todo.favorite ? '★' : '☆'}</button>
        </div>
      `;
    
      const toggleBtn = li.querySelector('.toggle-btn') as HTMLButtonElement;
      toggleBtn.addEventListener('click', () => toggleCompleted(todo.id));
    
      const favoriteBtn = li.querySelector('.favorite-btn') as HTMLButtonElement;
      favoriteBtn.addEventListener('click', () => toggleFavorite(todo.id));
    
      const editBtn = li.querySelector('.edit-btn') as HTMLButtonElement;
      editBtn.addEventListener('click', () => {
        const newText = prompt('Edit todo', todo.text);
        if (newText) editTodo(todo.id, newText);
      });
    
      const removeBtn = li.querySelector('.remove-btn') as HTMLButtonElement;
      removeBtn.addEventListener('click', () => removeTodo(todo.id));
    
      todoList.appendChild(li);
    });
    
  };
