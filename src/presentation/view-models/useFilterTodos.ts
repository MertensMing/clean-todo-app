import { useCallback } from "react";
import { filterTodos } from "../../core/useCases/filterTodosUseCase";
import { ITodoStore } from "../store/todoStore";

export function useFilterTodos({ setTodos, setFilterStatus }: ITodoStore) {
  return {
    handleCheck: useCallback(
      (completed?: boolean) => {
        filterTodos(completed, {
          store: {
            setTodoList: (todos) => setTodos(todos)
          }
        })
        setFilterStatus(completed)
      },
      [setFilterStatus, setTodos],
    )
  }
}