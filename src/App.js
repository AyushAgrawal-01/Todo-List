import './App.css';
import Header from "./My_Components/Header";
import Footer from "./My_Components/Footer";
import Todos from './My_Components/Todos';
import AddTodo from "./My_Components/AddTodo";
import About from "./My_Components/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")){
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  else{
    initTodo = [];
  }
  const ondelete = (todo) =>{
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title,description)=>{
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{
      sno=todos[todos.length-1].sno + 1;
    }
      const mytodo = {
        sno:sno,
        title: title,
        description: description,
      }
      setTodos([...todos, mytodo]);  
    }
    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])
    
    let c = ()=>{
      return(
        <>
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} ondelete={ondelete} />
        </>
      )
    }
  return (
    <>
    <BrowserRouter>
      <Header title="MY TODOS LIST" searchbar={false}/>
      <Routes>
          <Route exact path="/" element={c()}></Route>
          <Route exact path="/about" element={<About />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
