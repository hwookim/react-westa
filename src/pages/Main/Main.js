import React, { useState } from 'react'

const Main = () => {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([]);

    const handleChange = (event) => {
        setTodo(event.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.key !== "Enter") return;

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
            <input value={todo} onChange={handleChange} onKeyUp={handleKeyDown} />
            {todos.map((value, index) =>
                <div key={index}>
                    {value}
                    <button onClick={handleClickDelete(index)}>x</button>
                </div>
            )}
        </div>
    )
}

export default Main