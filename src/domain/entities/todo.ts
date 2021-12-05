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

export function destroy(todos: Todo[], todo: Todo): Todo[] {
  return todos.filter(function (candidate) {
    return candidate?.id !== todo?.id;
  });
}

export function update(todo: Todo, text: string): Todo {
  return {
    ...todo,
    title: text
  }
};

export function toggleAll(todos: Todo[], checked: boolean): Todo[] {
  return todos.map(function (todo) {
    return {
      ...todo,
      completed: checked
    }
  });
}

export function toggle(todo: Todo): Todo {
  return {
    ...todo,
    completed: !todo?.completed
  }
}

export function clearCompleted(todos: Todo[]) {
  return todos.filter(function (todo) {
    return !todo.completed;
  });
}