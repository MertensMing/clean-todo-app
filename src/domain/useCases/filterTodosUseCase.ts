import { Todo, filterTodos as filterTodosMethod } from "../entities/todo";
import { listTodo } from '../../external/api'
import { reportError } from "../../external/logger";

interface IFilterTodoServices {
  store: {
    setTodoList: (todos: Todo[]) => void
  }
}

export async function filterTodos(status?: Todo['completed'], services?: IFilterTodoServices) {
  try {
    const todos = await listTodo()
    const newTodos = filterTodosMethod(todos, status)
    services?.store?.setTodoList(newTodos)
  } catch (e) {
    reportError(e)
  }
}