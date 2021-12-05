import { useCallback } from "react";
import { Todo } from "../../domain/entities/todo";
import { IModifyStatusServices, modifyStatus } from "../../domain/useCases/modifyTodoStatusUseCase";

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