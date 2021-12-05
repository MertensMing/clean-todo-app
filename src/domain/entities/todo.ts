import { uuid } from "../../shared/lib/utils";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export function createTodo(title: string): Todo {
  return {
    id: uuid(),
    title: title,
    completed: false
  }
}

export function filterTodos(todos: Todo[], status?: Todo['completed']) {
  return todos.filter(function (todo) {
    if (status !== false && status !== true) {
      return true
    }
    return todo.completed === status;
  });
}