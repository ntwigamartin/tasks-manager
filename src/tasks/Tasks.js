import React from "react"
import ListTasks from "./List-tasks";
import AddTasks from "./Add-tasks";
import { useEffect, useState} from "react";

function Tasks(){
    const [tasks, setTasks] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/tasks')
        .then(res=>res.json())
        .then(data=>setTasks(data))
    },[])
  
    return (
       <div className="tasks-container" >
         <ListTasks tasks={tasks} />
         <AddTasks setTasks={setTasks} tasks={tasks}/>
       </div>
    )
}

export default Tasks;