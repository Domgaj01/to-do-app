import { Selector } from "testcafe";

fixture('Todo App E2E Tests')
  .page('http://localhost:5173/');

test('User can add a todo', async t => {
  const input = Selector('input[type="text"]');
  const button = Selector('button').withText('Add');
  const todoList = Selector('.todo-item');

  await t
    .typeText(input, 'My first todo')
    .click(button)
    .expect(todoList.withText('My first todo').exists).ok();
});
