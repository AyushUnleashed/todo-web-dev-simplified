import React from 'react'

export const TodoItem = ({todo,toggleTodo,deleteTodo}) => {
  return (
    <>
      <li>
            <label>
              <input type="checkbox" onChange={e=> toggleTodo(todo.id, e.target.checked)}/>
              {todo.title}
              <button className='btn btn-danger'
                onClick={()=>deleteTodo(todo.id)}> Delete Todo </button>
            </label>
        </li>
    </>
  )
}
