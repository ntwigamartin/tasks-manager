import React from "react";
import ListTasks from "./List-tasks";
import AddTasks from "./Add-tasks";

function Tasks(){
    return (
       <div>
         <ListTasks />
         <AddTasks />
       </div>
    )
}

export default Tasks;