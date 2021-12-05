import { useCallback } from "react";
import { batchModifyStatus } from "../../core/useCases/batchModifyTodoStatusUseCase";
import { ITodoStore } from "../store/todoStore";

export function useBatchModifyTodoStatus({ setTodos }: ITodoStore) {
  return {
    handleBatchMofifyStatus: useCallback(
      (completed: boolean) => {
        batchModifyStatus(completed, {
          store: {
            setTodoList: todos => setTodos(todos),
          }
        })
      },
      [setTodos],
    )
  }
}