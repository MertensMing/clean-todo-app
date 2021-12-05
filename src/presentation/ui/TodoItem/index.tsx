import React from "react";
import { Todo } from "../../../core/entities/todo";
import { useTodoStore } from "../../store/todoItemStore";
import { useModifyTodoStatus } from "../../view-models/useModifyTodoStatus";
import { useModifyTodoTitle } from "../../view-models/useModifyTodoTitle";

interface IProps {
  todo: Todo
  onDelete: (id: string) => void
  onTodosUpdate: (todos: Todo[]) => void
}

const TodoItem: React.FC<IProps> = ({ todo, onDelete, onTodosUpdate }) => {
  const cls = `${todo.completed ? 'completed' : ''}`
  const store = useTodoStore()
  const { handleShowInput, handleHideInput, handleModifyTodoTitle } = useModifyTodoTitle(store)
  const { handleMofifyStatus } = useModifyTodoStatus()

  return (
    <div>
      <div className={cls}>
        <div className="text-lg font-medium">
          <input
            className="cursor-pointer mr-4"
            type="checkbox"
            checked={todo.completed}
            onClick={() => {
              handleMofifyStatus(!todo.completed, todo, onTodosUpdate)
            }}
          />
          <span
            className={`${todo?.completed ? 'line-through text-gray-500' : ''}`}
            onDoubleClick={handleShowInput}
          >
            {todo.title}
          </span>
          <span
            className="cursor-pointer ml-4 text-red-500"
            onClick={() => onDelete(todo.id)}
          >
            delete
          </span>
        </div>
        {
          store?.editing &&
          <input
            className="edit"
            onBlur={handleHideInput}
            autoFocus
            defaultValue={todo.title}
            onKeyDown={e => {
              if (e.keyCode === 13) {
                handleModifyTodoTitle(e.currentTarget?.value, todo, onTodosUpdate)
              }
            }}
          /> 
        }
      </div>
    </div>
  )
}

export default TodoItem