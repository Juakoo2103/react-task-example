import TaskCard from "./TaskCard"
import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

function TaskList() {

    const { tasks } = useContext(TaskContext)
    

    if(tasks.length === 0) {
        return <h1 className="text-3xl font-black text-center selection:bg-white selection:text-black"> No hay tareas aun 🥲</h1>
    }

  return (

    <div className="grid grid-cols-4 m-4 gap-4 ">
        {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
        ))}
    </div>
  )
}

export default TaskList