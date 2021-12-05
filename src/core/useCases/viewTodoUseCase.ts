import { listTodo } from "../../external/api";
import { reportError } from "../../external/logger";
import { Todo } from "../entities/todo";

export interface IViewTodoServices {
  store: {
    setTodoList: (todos: Todo[]) => void
  }
}

export async function viewTodo(services: IViewTodoServices) {
  try {
    const todos = await listTodo()
    services?.store?.setTodoList(todos)
  } catch (e) {
    reportError(e)
  }
}