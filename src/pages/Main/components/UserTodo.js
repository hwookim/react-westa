import React, { useState } from 'react';

const UserTodo = props => {
  const { user } = props;
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = event => {
    setTodo(event.target.value);
  };

  const handleKeyDown = event => {
    if (event.key !== 'Enter') return;

    addTodo();
  };

  const addTodo = () => {
    if (!todo) return;
    setTodos([...todos, todo]);
    setTodo('');
  };

  const handleClickDelete = index => () => {
    const deleted = [...todos];
    deleted.splice(index, 1);
    setTodos(deleted);
  };
  return (
    <div>
      <div>{user.username}</div>
      <input value={todo} onChange={handleChange} onKeyUp={handleKeyDown} />
      <button onClick={addTodo}>todo!</button>
      {todos.map((value, index) => (
        <div key={index}>
          {value}
          <button onClick={handleClickDelete(index)}>x</button>
        </div>
      ))}
    </div>
  );
};

export default UserTodo;
