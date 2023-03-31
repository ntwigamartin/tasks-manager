import React from "react"
import ListTasks from "./List-tasks";
import AddTasks from "./Add-tasks";
import { useEffect, useState} from "react";

function Tasks(){
    const [tasks, setTasks] = useState([])

    useEffect(()=>{
        fetch('https://bing-todos.onrender.com/todos')
        .then(res=>res.json())
        .then(data=>setTasks(data.data))
    },[])
  
  function handleDelete(id) {
    fetch(`https://bing-todos.onrender.com/todos/${id}`, { 
      method: 'DELETE' })
      .then(res => {
        if (res.ok) {
            const updatedTasks = tasks.filter(task => task.id !== id);
            setTasks(updatedTasks);
        } else {
            throw new Error('Failed to delete task');
        }
    })
    .catch(err => {
        console.error(err);
    });
  }

    return (
       <div className="tasks-container" >
         <ListTasks tasks={tasks} handleDelete={handleDelete} />
         <AddTasks setTasks={setTasks} tasks={tasks}/>
       </div>
    )
}

export default Tasks;