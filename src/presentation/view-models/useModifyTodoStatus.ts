import { useCallback } from "react";
import { Todo } from "../../core/entities/todo";
import { IModifyStatusServices, modifyStatus } from "../../core/useCases/modifyTodoStatusUseCase";

export function useModifyTodoStatus() {
  return {
    handleMofifyStatus: useCallback(
      (completed: boolean, todo: Todo, onTodosUpdate: IModifyStatusServices['event']['notifyUpdated']) => {
        modifyStatus(completed, todo, {
          event: {
            notifyUpdated: todos => onTodosUpdate(todos),
          }
        })
      },
      [],
    )
  }
}