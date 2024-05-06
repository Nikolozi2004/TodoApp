import React from 'react'
import { useState } from 'react';

function TodoForm () {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault();

        console.log(value)
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input
                type="text"
                className='todo-input'
                placeholder='What is the task today'
                onChange={(e) => setValue(e.target.value)} />
            <button type='submit' className='todo-button'>Add Task</button>
        </form>
    )
}

export default TodoForm;