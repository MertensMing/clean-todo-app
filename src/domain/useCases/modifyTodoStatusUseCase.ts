import { listTodo, updateTodo } from "../../external/api";
import { reportError } from "../../external/logger";
import { Todo } from "../entities/todo";

export interface IModifyStatusServices {
  event: {
    notifyUpdated: (todos: Todo[]) => void
  }
}

export async function modifyStatus(completed: boolean, todo: Todo, services: IModifyStatusServices) {
  try {
    const updated = { ...todo, completed }
  await updateTodo(updated)
  const todos = await listTodo()
  services.event.notifyUpdated(todos)
  } catch (e) {
    reportError(e)
  }
}
