import { useCallback, useState } from "react";
import { Todo } from "../../domain/entities/todo";

export interface ITodoStore {
  todos: Todo[]
  value?: string
  allCompleted: boolean
  setValue: (text: string) => void
  setTodos: (todos: Todo[]) => void
}

export function useTodoStore(): ITodoStore {
  const [todos, setTodos] = useState<Todo[]>([])
  const [value, setValue] = useState('')
  const [allCompleted, setallCompleted] = useState(false)

  return {
    todos,
    value,
    allCompleted,
    setValue,
    setTodos: useCallback(
      (todos:Todo[]) => {
        const allCompleted = todos?.every(todo => todo.completed)
        setallCompleted(allCompleted)
        setTodos(todos)
      },
      [],
    )
  }
}