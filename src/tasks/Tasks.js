import React from "react"
import ListTasks from "./List-tasks";
import AddTasks from "./Add-tasks";
import { useEffect} from "react";

function Tasks(){


    useEffect(()=>{
        fetch('http://localhost:3000/tasks')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])

    return (
       <div className="tasks-container" >
         <ListTasks />
         <AddTasks />
       </div>
    )
}

export default Tasks;