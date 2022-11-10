import React, { useEffect, useState } from 'react';
import UserTodo from './components/UserTodo';

const Main = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/data/todos.json')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      {users.map(user => (
        <UserTodo key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Main;
