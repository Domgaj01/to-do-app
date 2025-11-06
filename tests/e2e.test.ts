import { Selector } from 'testcafe';

fixture('Todo List E2E')
  .page('https://dominikgraphic.com/');

test('User can add a todo item', async t => {
  const input = Selector('#todo-input');
  const list = Selector('#todo-list');

  await t
    .typeText(input, 'My new todo')
    .pressKey('enter')
    .expect(list.textContent)
    .contains('My new todo');
});
