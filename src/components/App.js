import React, { useEffect } from 'react';
import Footer from './footer';
import Header from './Header';
import AddTodo from './AddTodo';
import About from './About';
import Todos from './Todos';
import './css/App.css';
import './css/Todos.css';
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  let initTodo
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem('todos'))
  }
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo
    }));
    localStorage.getItem('todos')
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const addTodoList = (title, desc) => {
    // console.log("Add Todolist", title, desc);
    let sno
    if (todos.length === 0) {
      sno = 1
    }
    else {
      sno = todos[todos.length - 1].sno + 1
    }
    const myTodo = {
      sno: sno,
      Event: title,
      Timming: desc
    }

    setTodos([...todos, myTodo])
    // console.log(myTodo);


  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);


  return (
    <Router>
      <div>
        < Header title="Shiva's TodoList" allowUser={false} />

        <Routes>
        
          <Route exact path="/about" element={<About/>}/>

          <Route exact path="/" element={
              <>
                <Todos data={todos} onDelete={onDelete} addTodoList={addTodoList} />
                <AddTodo addTodoList={addTodoList} />
              </>  
          } >
          </Route>

        </Routes>

        < Footer />
      </div>
    </Router>
  );
}
export default App;