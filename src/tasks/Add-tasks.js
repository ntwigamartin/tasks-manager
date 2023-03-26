import React from 'react';
import './tasks.css'

function AddTasks(){
    return (
        <div className='add-tasks' >
            <h3>Add a New Task</h3>
            <form>
                <label htmlFor='title' >Title</label>
                <input type="text" value="" />

                <label htmlFor='description' >Description</label>
                <input type="text" value="" />

                <label htmlFor='status' >Status</label>
                <input type="number" value="" />

                <label htmlFor='priority' >Priority</label>
                <input type="number" value="" />
            </form>
        </div>
    )
}

export default AddTasks;