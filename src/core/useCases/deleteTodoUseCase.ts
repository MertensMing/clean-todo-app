import { api, logger } from "../../external";
import { Todo } from "../entities/todo";

interface IDeleteTodoServices {
  store: {
    setTodoList: (todos: Todo[]) => void
  }
}

export async function deleteTodo(id: string, services: IDeleteTodoServices) {
  try {
    await api.deleteTodo(id)
    const todos = await api.listTodo()
    services?.store?.setTodoList(todos)
  } catch (e) {
    logger.reportError(e)
  }
}