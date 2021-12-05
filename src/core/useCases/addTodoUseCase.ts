import { api, logger } from "../../external";
import { Todo, createTodo } from "../entities/todo";

export interface IAddTodoServices {
  store: {
    setTodoList: (todos: Todo[]) => void
    clearInput: () => void
  }
}

export interface IInputNewTodoTitleServices {
  store: {
    setNewTodoTitle: (text: string) => void
  }
}

export async function inputNewTodoTitle(text: string, services: IInputNewTodoTitleServices) {
  services.store.setNewTodoTitle(text)
}

export async function addTodo(text: string, services: IAddTodoServices) {
  try {
    const todo = createTodo(text)
    await api.createTodo(todo)
    const todos = await api.listTodo()
    services?.store?.setTodoList(todos)
    services?.store?.clearInput()
  } catch (e) {
    logger.reportError(e)
  }
}