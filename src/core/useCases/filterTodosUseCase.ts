import { api, logger } from "../../external";
import { Todo, filterTodos as filterTodosMethod } from "../entities/todo";

interface IFilterTodoServices {
  store: {
    setTodoList: (todos: Todo[]) => void
  }
}

export async function filterTodos(status?: Todo['completed'], services?: IFilterTodoServices) {
  try {
    const todos = await api.listTodo()
    const newTodos = filterTodosMethod(todos, status)
    services?.store?.setTodoList(newTodos)
  } catch (e) {
    logger.reportError(e)
  }
}