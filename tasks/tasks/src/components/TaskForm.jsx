import { useState , useContext} from "react"
import { TaskContext } from "../context/TaskContext";
import { Toaster } from "react-hot-toast";


function TaskForm({}) {

    
    const [titulo, setTitulo] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const {createTask} = useContext(TaskContext)



    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({titulo,descripcion})
        setTitulo('')
        setDescripcion('')
    }

   

  return(
    <>
        <div className="grid place-content-center mt-4 mb-10">
            <h1 className="text-2xl font-black italic">Inserta una nueva tarea</h1>
        </div>
        <form  className="grid place-content- gap-4 m-auto w-1/2" onSubmit={handleSubmit}> 
            <label className="font-black text-xl italic ">Titulo tarea</label>
            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Escribe tu tarea"
            onChange={(e) => setTitulo(e.target.value)}
            value={titulo} autoFocus/>
            <label className="font-black text-xl italic ">Descripcion tarea</label>
            <textarea className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Escribe la descripcion de la tarea"
            onChange={(e) => setDescripcion(e.target.value)} 
            value={descripcion}></textarea>
            <button  className="p-2 mb-4 w-fit place-content-end rounded-lg bg-green-300 hover:bg-green-600 hover:duration-200 ">
                Guardar
            </button>
            <Toaster position="bottom-center"/>
        </form>
    </>
  )
}
export default TaskForm