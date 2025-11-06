/// <reference types="testcafe" />
import { Selector } from 'testcafe';

fixture('Todo App E2E Tests')
  .page('https://dominikgraphic.com/');

test('App should load and show the main page', async t => {
  await t.expect(Selector('body').exists).ok();
});

test('User can see the todo input field', async t => {
  const input = Selector('input[type="text"]');
  await t.expect(input.exists).ok();
});

test('User can click the add button', async t => {
  const button = Selector('button').withText('Add');
  await t.expect(button.exists).ok();
});
