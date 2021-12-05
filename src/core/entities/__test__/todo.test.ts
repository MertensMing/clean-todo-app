import { createTodo, filterTodos, Todo } from '../todo'

test('createTodo', () => {
  const newTodo = createTodo('test')
  expect(newTodo.title).toEqual('test')
  expect(newTodo.completed).toEqual(false)
});

test('filterTodos', () => {
  const testTodos: Todo[] = [
    createTodo('test1'),
    createTodo('test2'),
    createTodo('test3')
  ]
  testTodos[0].completed = true

  expect(filterTodos(testTodos).length).toEqual(3)
  expect(filterTodos(testTodos, true).length).toEqual(1)
  expect(filterTodos(testTodos, false).length).toEqual(2)
});