import { createContext, useState, useEffect } from "react"
import {tasks as data} from '../data/tasks.js'
import {toast} from 'react-hot-toast'


export const TaskContext = createContext()

export function TaskContextProvider(props) {

  const [tasks, setTasks] = useState([]);

  function deleteTask(taskId) {
    const deletedTask = tasks.find((task) => task.id === taskId);
    if (deletedTask) {
      setTasks(tasks.filter((task) => task.id !== taskId));
      toast.error(`${deletedTask.titulo}  ha sido eliminada`);
    }
  }

  function createTask(task) {
    setTasks([...tasks, {
      titulo: task.titulo,
      id: tasks.length,
      descripcion: task.descripcion
    }
   ]);
   toast.success(`Ha sido creada una nueva tarea llamada ${task.titulo} `)
  }

  useEffect(() => {
    setTasks(data)

}, [])

  return (
    <TaskContext.Provider value={{
      tasks,
      deleteTask,
      createTask
    }}>
        {props.children}
    </TaskContext.Provider>
)
}

