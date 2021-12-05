import { api } from '../../../external';
import { createTodo, Todo } from '../../entities/todo';
import { inputNewTodoTitle, IInputNewTodoTitleServices, addTodo, IAddTodoServices } from '../addTodoUseCase'

test('inputNewTodoTitle', () => {
  let result = ''
  const services: IInputNewTodoTitleServices = {
    store: {
      setNewTodoTitle(t) {
        result = t
      }
    }
  }
  inputNewTodoTitle('test', services)
  expect(result).toEqual('test')
});

test('addTodo', async () => {
  let newTodo: Todo = null as any
  let todoList: Todo[] = []
  let input = 'test'

  api.createTodo = async function(todo) {
    newTodo = todo
  }
  api.listTodo = async function() {
    return [createTodo('1'), createTodo('2')]
  }

  const services: IAddTodoServices = {
    store: {
      setTodoList(t) {
        todoList = t
      },
      clearInput() {
        input = ''
      }
    }
  }

  await addTodo('test', services)

  expect(todoList?.[0].title).toEqual('1')
  expect(newTodo.title).toEqual('test')
  expect(input).toEqual('')
});
