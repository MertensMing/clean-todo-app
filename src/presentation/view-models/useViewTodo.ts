import { useCallback } from "react";
import { viewTodo } from '../../core/useCases/viewTodoUseCase'
import { ITodoStore } from "../store/todoStore";

export function useViewTodo({ setTodos }: ITodoStore) {
  return {
    handleMount: useCallback(
      () => {
        viewTodo({
          store: {
            setTodoList: list => setTodos(list)
          }
        })
      },
      [setTodos],
    )
  }
}