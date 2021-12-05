import { batchUpdateTodoStatus, listTodo } from "../../external/api";
import { reportError } from "../../external/logger";
import { Todo } from "../entities/todo";

export interface IBatchModifyStatusServices {
  store: {
    setTodoList: (todos: Todo[]) => void
  }
}

export async function batchModifyStatus(completed: boolean, services: IBatchModifyStatusServices) {
  try {
    await batchUpdateTodoStatus(completed)
    const todos = await listTodo()
    services.store.setTodoList(todos)
  } catch (e) {
    reportError(e)
  }
}
