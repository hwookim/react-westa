import React, { useEffect, useState } from 'react'

const Main = () => {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/data/todos.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    const handleChange = (event) => {
        setTodo(event.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.key !== "Enter") return;

        addTodo();
    }

    const addTodo = () => {
        if (!todo) return;
        setTodos([...todos, todo]);
        setTodo("");
    }

    const handleClickDelete = (index) => () => {
        const deleted = [...todos];
        deleted.splice(index, 1);
        setTodos(deleted);
    }

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <div>{user.username}</div>
                    <input value={todo} onChange={handleChange} onKeyUp={handleKeyDown} />
                    <button onClick={addTodo}>todo!</button>
                    {todos.map((value, index) =>
                        <div key={index}>
                            {value}
                            <button onClick={handleClickDelete(index)}>x</button>
                        </div>
                    )}
                </div>))}
        </div >
    )
}

export default Main