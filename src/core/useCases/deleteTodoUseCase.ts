import { Todo } from "../entities/todo";
import { deleteTodo as deleteTodoApi, listTodo } from '../../external/api'
import { reportError } from "../../external/logger";

interface IDeleteTodoServices {
  store: {
    setTodoList: (todos: Todo[]) => void
  }
}

export async function deleteTodo(id: string, services: IDeleteTodoServices) {
  try {
    await deleteTodoApi(id)
    const todos = await listTodo()
    services?.store?.setTodoList(todos)
  } catch (e) {
    reportError(e)
  }
}