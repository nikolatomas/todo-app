import React from 'react';

function Todo(props) {
  const deleteHandeler = () => {
    props.setTodos(props.todos.filter(el => el.id !== props.todo.id));
  };
  const completeHandeler = () => {
    props.setTodos(
      props.todos.map(item => {
        if (item.id === props.todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
          return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${props.todo.completed ? 'completed' : ''}`}>
        {props.text}
      </li>
      <button onClick={completeHandeler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandeler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
