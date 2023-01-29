"use client";
import { type } from "os";
import React, { useState } from "react";

export default function ToDo() {
    const [todo,setTodo]=useState('')
  const [todos, setTodos] = useState([
    { todoText: "ToDo 1---", completed: false },
    { todoText: "ToDo 2---", completed: false },
    { todoText: "ToDo 3---", completed: false },
    { todoText: "ToDo 4---", completed: false },
    { todoText: "ToDo 5---", completed: false },
  ]);
  const onClickHandler=(meraElem:any)=>{
    console.log("meraElem",meraElem)
    // map runs on an array and returns an array
    const newTodos=todos.map((todo)=>{
        console.log("todo",todo);
        if(todo.todoText==meraElem.todoText){
            todo.completed=!todo.completed  // true hy tu false kr do & vise versa

        }
        return todo;
    })
    console.log(newTodos);
    setTodos(newTodos);
  }
  const addTodo=()=>{
  const newTodo={todoText:todo,completed:false}
  const newTodos=[...todos,newTodo]
  setTodos(newTodos);
  setTodo("");
  };
  const deleteTodo=(meraTodo:any)=>{
    const newTodos=todos.filter(todo=>{
        if(todo.todoText== meraTodo.todoText) return false;
        return true;
    })
    console.log("old todos",todos,"new todos",newTodos);
    setTodos(newTodos);
  };
  return (
    <>
      <div>ToDo</div>
      <input placeholder="add todo" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
      <button onClick={addTodo}>Add</button>
      {
        // command + D to update at once (after selecting required word)
        <ul>
          {todos.map((elem) => {
            return (
              <li
                style={{
                  color: elem.completed ? "green" : "red",
                  fontStyle: "oblique",
                  listStyle:"none"
                }}
                key={elem.todoText}
                >
                <input type="checkbox" checked={elem.completed} onChange={()=> {onClickHandler(elem)}} />
                {elem.todoText}
                 <button onClick={()=>deleteTodo(elem)}>Delete </button>  
              </li>
              
            );
          })}
        </ul>
      }
    </>
  );
}
