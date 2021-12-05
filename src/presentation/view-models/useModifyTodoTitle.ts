import { useCallback } from "react";
import { Todo } from "../../core/entities/todo";
import { hideInput, showInput, modifyTitle, IModifyTitleServices } from "../../core/useCases/modifyTodoTitleUseCase";
import { ITodoItemStore } from "../store/todoItemStore";

export function useModifyTodoTitle(
  { setEditing }: Pick<ITodoItemStore, 'setEditing'>,
) {
  return {
    handleShowInput: useCallback(
      () => {
        showInput({
          store: {
            showInput: () => setEditing(true),
          }
        })
      },
      [setEditing],
    ),
    handleHideInput: useCallback(
      () => {
        hideInput({
          store: {
            hideInput: () => setEditing(false),
          }
        })
      },
      [setEditing],
    ),
    handleModifyTodoTitle: useCallback(
      (title: string, todo: Todo, onTodosUpdate: IModifyTitleServices['event']['notifyUpdated']) => {
        modifyTitle(title, todo, {
          store: {
            hideInput: () => setEditing(false),
          },
          event: {
            notifyUpdated: onTodosUpdate
          }
        })
      },
      [setEditing],
    ),
  }
}