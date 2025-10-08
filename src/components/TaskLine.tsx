import { useState } from "react";

interface TaskLineProps{
    task:string;
    id:number;
}

export default function TaskLine(taskLineProps:Readonly<TaskLineProps>){
    const [isSelected, setIsSelected]=useState(false); 
    return <div className="task-line" key={taskLineProps.id}>
        <input type="checkbox" onChange={()=>setIsSelected(prev=>!prev)}></input>
        <p className={isSelected?"task-p-selected":"task-p"}>{taskLineProps.task}</p>
    </div>;
}