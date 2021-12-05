import { api, logger } from "../../external";
import { Todo } from "../entities/todo";

export interface IModifyTitleServices {
  store: {
    hideInput: () => void
  }
  event: {
    notifyUpdated: (todos: Todo[]) => void
  }
}

export interface IShowInputServices {
  store: {
    showInput: () => void
  }
}

export interface IHideInputServices {
  store: {
    hideInput: () => void
  }
}

export function showInput(services: IShowInputServices) {
  services.store.showInput()
}

export async function modifyTitle(title: string, todo: Todo, services: IModifyTitleServices) {
  try {
    const updated = { ...todo, title }
    await api.updateTodo(updated)
    const todos = await api.listTodo()
    services.event.notifyUpdated(todos)
    services.store.hideInput()
  } catch (e) {
    logger.reportError(e)
  }
}

export function hideInput(services: IHideInputServices) {
  services.store.hideInput()
}