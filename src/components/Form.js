import React from 'react';

function Form(props) {
  const inputTextHandler = e => {
    props.setInput(e.target.value);
  };
  const submitTodoHandeler = e => {
    e.preventDefault();
    props.setTodos([
      ...props.todos,
      { text: props.input, completed: false, id: Math.random() },
    ]);
    props.setInput('');
  };
  const statusHandeler = (event) =>{
      props.setStatus(event.target.value)
  }
  return (
    <form>
      <input
        value={props.input}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button
        onClick={submitTodoHandeler}
        className="todo-button"
        type="submit"
      >
        Add
      </button>
      <div className="select">
        <select onChange={statusHandeler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
