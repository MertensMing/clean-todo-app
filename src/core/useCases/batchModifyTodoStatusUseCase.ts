import { api, logger } from "../../external";
import { Todo } from "../entities/todo";

export interface IBatchModifyStatusServices {
  store: {
    setTodoList: (todos: Todo[]) => void
  }
}

export async function batchModifyStatus(completed: boolean, services: IBatchModifyStatusServices) {
  try {
    await api.batchUpdateTodoStatus(completed)
    const todos = await api.listTodo()
    services.store.setTodoList(todos)
  } catch (e) {
    logger.reportError(e)
  }
}
