import { api, logger } from "../../external";
import { Todo } from "../entities/todo";

export interface IModifyStatusServices {
  event: {
    notifyUpdated: (todos: Todo[]) => void
  }
}

export async function modifyStatus(completed: boolean, todo: Todo, services: IModifyStatusServices) {
  try {
    const updated = { ...todo, completed }
    await api.updateTodo(updated)
    const todos = await api.listTodo()
    services.event.notifyUpdated(todos)
  } catch (e) {
    logger.reportError(e)
  }
}
