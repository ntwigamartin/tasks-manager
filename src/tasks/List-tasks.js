import React from 'react';

function ListTasks(){
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
                    <tr>
                        <td>title</td>
                        <td>description</td>
                        <td>status</td>
                        <td>priority</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ListTasks;