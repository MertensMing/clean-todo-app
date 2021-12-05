import { api } from '../../../external';
import { createTodo, Todo } from '../../entities/todo';
import { batchModifyStatus, IBatchModifyStatusServices } from '../batchModifyTodoStatusUseCase'

test('batchModifyStatus', async () => {
  let status: boolean = true
  let todoList: Todo[] = []

  api.batchUpdateTodoStatus = async function(completed) {
    status = completed
  }
  api.listTodo = async function() {
    return [createTodo('1'), createTodo('2')]
  }

  const services: IBatchModifyStatusServices = {
    store: {
      setTodoList(t) {
        todoList = t
      },
    }
  }

  await batchModifyStatus(false, services)

  expect(status).toEqual(false)
  expect(todoList?.[0].title).toEqual('1')
});
