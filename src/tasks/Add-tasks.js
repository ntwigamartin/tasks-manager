import React, { useState} from 'react';
import './tasks.css'

function AddTasks({setTasks, tasks}){
    
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState(0)
    const [priority, setPriority] = useState(0)

    const body = {
        title: title,
        description: description,
        status: status,
        priority: priority
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(body);
        fetch('https://bing-todos.onrender.com/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
        .then(res=>res.json())
        .then(data=>setTasks([...tasks, data]))
    }
        
    return (
        <div className='add-tasks' >
            <h3>Add a New Task</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title' >Title</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />

                <label htmlFor='description' >Description</label>
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} />

                <label htmlFor='status' >Status</label>
                <select value={status} onChange={(e)=>setStatus(e.target.value)} >
                    <option>CREATED</option>
                    <option>STARTED</option>
                    <option>COMPLETED</option>
                    <option>CANCELLED</option>
                </select>

                <label htmlFor='priority' >Priority</label>
                <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
                    <option>LOW</option>
                    <option>MEDIUM</option>
                    <option>HIGH</option>
                </select>
                <button >Submit</button>
            </form>
        </div>
    )
}

export default AddTasks;
