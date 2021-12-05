import { useState } from "react";

export interface ITodoItemStore {
  editing: boolean
  setEditing: (bool: boolean) => void
}

export function useTodoStore(): ITodoItemStore {
  const [editing, setEditing] = useState(false)

  return {
    editing,
    setEditing,
  }
}