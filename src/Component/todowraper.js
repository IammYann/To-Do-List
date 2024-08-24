import React, {useState} from 'react'
import { Todoform } from './todoform'
import {Todo } from './todo'
import { EditTodoform } from './edittodofrom';
import { v4 as uuidv4} from 'uuid';
uuidv4();

export const Todowraper = () => {
  const [todos,setTodos]= useState([])

  const addTodo=todo=>{
    setTodos([...todos, {id:uuidv4(), task: todo, complete: false, isEditing: false}]);
  }

  const toggleComplete = id => {
    setTodos(
      todos.map(todo => 
        todo.id === id?{...todo, completed: !todo.completed} : todo
      )
    );
  }
  const deleteTodo = id =>{
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  const editTodo=(id)=>{
    setTodos(
      todos.map(todo => 
        todo.id === id ? {...todo, isEditing: !todo.isEditing} :todo
      )
    );
  }
  const editTask=(task , id)=>{
    setTodos(
      todos.map(todo => 
        todo.id === id ? {...todo, task, isEditing: !todo.isEditing}:todo
      )
    );
  };
  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done!</h1>
        <Todoform addTodo={addTodo}/>
        {todos.map((todo)=>(
          todo.isEditing ? (
            <EditTodoform editTodo={editTask} task={todo} />
          ):(
            <Todo 
            task={todo} 
            key={todo.id}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            />
          )
        )
        )}
    </div>
  )
}
