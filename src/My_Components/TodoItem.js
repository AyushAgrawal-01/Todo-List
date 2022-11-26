import React from 'react'

const TodoItem = ({todo, ondelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.description}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{ondelete(todo)}}>Delete</button>
      <hr />
    </div>
  )
}

export default TodoItem
