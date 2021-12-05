import React, { useCallback, useEffect } from "react";
import TodoItem from "../TodoItem";
import { useTodoStore } from "../../store/todoStore";
import { useAddTodo } from "../../view-models/useAddTodo";
import { useViewTodo } from "../../view-models/useViewTodo";
import { useDeleteTodo } from "../../view-models/useDeleteTodo";
import { Todo } from "../../../domain/entities/todo";
import { useBatchModifyTodoStatus } from "../../view-models/useBatchModifyTodoStatus";
import { useFilterTodos } from "../../view-models/useFilterTodos";

const TodoApp: React.FC = () => {
  const store = useTodoStore()
  const { handleMount } = useViewTodo(store)
  const { handleAdd, handleInputNewTodoTitle } = useAddTodo(store)
  const { handleDelete } = useDeleteTodo(store)
  const { handleBatchMofifyStatus } = useBatchModifyTodoStatus(store)
  const { handleCheck } = useFilterTodos(store)
  const { setTodos } = store

  useEffect(() => {
    handleMount()
  }, [handleMount])

  const onTodosUpdate = useCallback(
    (todos: Todo[]) => setTodos(todos),
    [setTodos],
  )

  return (
    <div className="w-screen py-10">
      <div className="mx-auto" style={{ width: 400 }}>
        <header>
          {
            store?.todos?.length > 0 && store?.fliterStatus === undefined && 
            <input
              className="cursor-pointer"
              type="checkbox"
              checked={store.allCompleted}
              onClick={() => handleBatchMofifyStatus(!store.allCompleted)}
            />
          }
          <input
            placeholder="What needs to be done?"
            autoFocus
            value={store.value}
            onChange={e => {
              handleInputNewTodoTitle(e.target?.value ?? '')
            }}
            onKeyDown={function (event) {
              if (event.keyCode !== 13) {
                return;
              }
              event.preventDefault();
              handleAdd(store?.value ?? '')
            }}
          />
        </header>
        <div>
          <input className="cursor-pointer mr-2" type="checkbox" checked={store.fliterStatus === undefined} onClick={() => handleCheck()} />全部
          <input className="cursor-pointer mr-2 ml-4" type="checkbox" checked={store.fliterStatus} onClick={() => handleCheck(true)} />已完成
          <input className="cursor-pointer mr-2 ml-4" type="checkbox" checked={store.fliterStatus === false} onClick={() => handleCheck(false)} />待完成
        </div>
        {store?.todos?.length > 0 &&
          <div className="pt-4">
            {
              store?.todos?.map((item, index) => {
                return (
                  <TodoItem
                    key={index} 
                    onTodosUpdate={onTodosUpdate}
                    onDelete={handleDelete}
                    todo={item}
                  />
                )
              })
            }
          </div>
        }
      </div>
    </div>
  )
}

export default TodoApp