import { useCallback } from "react";
import { deleteTodo } from "../../core/useCases/deleteTodoUseCase";
import { ITodoStore } from "../store/todoStore";

export function useDeleteTodo({ setTodos }: Pick<ITodoStore, 'setTodos'>) {
  
  return {
    handleDelete: useCallback(
      (id: string) => {
        deleteTodo(id, {
          store: {
            setTodoList: todos => setTodos(todos),
          }
        })
      },
      [setTodos],
    )
  }
}