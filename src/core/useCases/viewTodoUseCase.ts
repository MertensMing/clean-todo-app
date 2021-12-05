import { api, logger } from "../../external";
import { Todo } from "../entities/todo";

export interface IViewTodoServices {
  store: {
    setTodoList: (todos: Todo[]) => void
  }
}

export async function viewTodo(services: IViewTodoServices) {
  try {
    const todos = await api.listTodo()
    services?.store?.setTodoList(todos)
  } catch (e) {
    logger.reportError(e)
  }
}