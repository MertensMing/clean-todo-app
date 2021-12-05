import { Todo } from "../core/entities/todo";

export interface API {
  listTodo: () => Promise<Todo[]>
  createTodo: (todo: Todo) => Promise<void>
  deleteTodo: (id: string) => Promise<void>
  updateTodo: (todo: Todo) => Promise<void>
  batchUpdateTodoStatus: (completed: boolean) => Promise<void>
}