import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
  let mystyle = {
    minHeight: "70vh",
    margin: "40px auto"
  }
   return (
<div className='container my-4' style={mystyle}>
      <h3 className='text-center my-3'>Todos List</h3>
      {props.todos.length===0? "NO Todo To Display":
      props.todos.map((todo,key)=>{
      return( 
      // <div key = {key}>
      <TodoItem todo={todo} key = {key} ondelete={props.ondelete}/>
      // </div>
      )
    })}
    </div>
  )
}

export default Todos
