import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/TodoList';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFiltederTodos] = useState([]);

  useEffect(() => {
    filterHandeler();
  }, [todos, status]);

  const filterHandeler = () => {
    switch (status) {
      case 'completed':
        setFiltederTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFiltederTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFiltederTodos(todos);
        break;
    }
  };
  return (
    <div>
      <header>
        <h1>To-do app</h1>
      </header>
      <Form
        status={status}
        setStatus={setStatus}
        todos={todos}
        setTodos={setTodos}
        setInput={setInput}
        input={input}
      />

      <ToDoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
