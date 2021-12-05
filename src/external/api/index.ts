import { Todo } from "../../domain/entities/todo";
import { API } from '../../services/api'

function store(namespace: string, data?: any) {
  if (data) {
    return localStorage.setItem(namespace, JSON.stringify(data));
  }

  var store = localStorage.getItem(namespace);
  return (store && JSON.parse(store)) || [];
}

const TodoStorageKey = 'clean-todo-mvc-storage-key'

export const listTodo: API['listTodo'] = async () => {
  return store(TodoStorageKey)
}

export const createTodo: API['createTodo'] = async (todo: Todo) => {
  const todos = store(TodoStorageKey)
  store(TodoStorageKey, [...todos, todo])
}

export const deleteTodo: API['deleteTodo'] = async (id: string) => {
  const todos = store(TodoStorageKey)
  store(TodoStorageKey, todos.filter(function (candidate: any) {
    return candidate?.id !== id;
  }))
}

export const updateTodo: API['updateTodo'] = async (todo: Todo) => {
  const todos = store(TodoStorageKey)
  const index = todos?.findIndex((t: any) => t?.id === todo?.id)
  if (index > -1) {
    todos[index] = todo
    store(TodoStorageKey, todos)
  }
}

export const batchUpdateTodoStatus: API['batchUpdateTodoStatus'] = async (completed: boolean) => {
  const todos = store(TodoStorageKey)
  store(TodoStorageKey, todos?.map((todo: any) => {
    return { ...todo, completed }
  }))
}