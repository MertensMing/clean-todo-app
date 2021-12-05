import { useCallback } from "react";
import { addTodo, inputNewTodoTitle } from "../../domain/useCases/addTodoUseCase";
import { ITodoStore } from "../store/todoStore";

export function useAddTodo({ setTodos, setValue }: ITodoStore) {
  return {
    handleAdd: useCallback(
      (text: string) => {
        addTodo(text, {
          store: {
            setTodoList: todos => setTodos(todos),
            clearInput: () => setValue('')
          }
        })
      },
      [setTodos, setValue],
    ),
    handleInputNewTodoTitle: useCallback(
      (text: string) => {
        inputNewTodoTitle(text, {
          store: {
            setNewTodoTitle: () => setValue(text)
          }
        })
      },
      [setValue],
    )
  }
}