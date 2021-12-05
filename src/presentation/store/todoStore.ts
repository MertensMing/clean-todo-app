import { useCallback, useState } from "react";
import { Todo } from "../../domain/entities/todo";

export interface ITodoStore {
  todos: Todo[]
  value?: string
  allCompleted: boolean
  fliterStatus?: Todo['completed']
  setValue: (text: string) => void
  setTodos: (todos: Todo[]) => void
  setFilterStatus: (bool?: boolean) => void
}

export function useTodoStore(): ITodoStore {
  const [todos, setTodos] = useState<Todo[]>([])
  const [value, setValue] = useState('')
  const [fliterStatus, setFilterStatus] = useState<Todo['completed']>()
  const [allCompleted, setallCompleted] = useState(false)

  return {
    todos,
    value,
    allCompleted,
    fliterStatus,
    setFilterStatus,
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