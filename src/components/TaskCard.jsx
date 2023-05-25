import { MdDeleteOutline } from "react-icons/md";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";



function TaskCard({task }) {

  const {deleteTask} = useContext(TaskContext)
  

  return (
  
    <div className="bg-zinc-600 p-4 rounded-lg  text-white">
            <h1 className="text-2xl font-bold"> {task.titulo}</h1>
            <p className="font-semibold selection:bg-fuchsia-300 selection:text-fuchsia-900" >{task.descripcion}</p>
            <button  className="bg-red-800 w-fit rounded-lg p-1 text-2xl mt-1"
            onClick={() => deleteTask(task.id)}>
            <MdDeleteOutline/>
            </button>
    </div>
  
  )
}

export default TaskCard