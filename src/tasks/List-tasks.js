import React from 'react';

function ListTasks({tasks}){
    return (
        <div className='tasks-list' >
            <h3>Tasks List</h3>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Priority</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => 
                        <tr>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.status}</td>
                            <td>{task.priority}</td>
                        </tr>
                        )}
                </tbody>
            </table>
        </div>
    )
}

export default ListTasks;

<tr>
<td>title</td>
<td>description</td>
<td>status</td>
<td>priority</td>
</tr>