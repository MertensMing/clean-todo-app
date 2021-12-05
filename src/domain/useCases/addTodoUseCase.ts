import { Todo, createTodo } from "../entities/todo";
import { createTodo as createTodoApi, listTodo } from '../../external/api'
import { reportError } from "../../external/logger";

interface IAddTodoServices {
  store: {
    setTodoList: (todos: Todo[]) => void
    clearInput: () => void
  }
}

interface IInputNewTodoTitleServices {
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
    await createTodoApi(todo)
    const todos = await listTodo()
    services?.store?.setTodoList(todos)
    services?.store?.clearInput()
  } catch (e) {
    reportError(e)
  }
}