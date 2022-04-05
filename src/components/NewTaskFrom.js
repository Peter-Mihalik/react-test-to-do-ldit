import { useState } from "react"
import './styles/newTaskForm.css'

export default function NewTaskFrom() {

    const [task, setTask] = useState('')
    const [date, setDate] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault()
      const taskObject = {
        task: task,
        date: date,
        id: Math.floor(Math.random() * 10000)
      }
      console.log(taskObject)
    }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={task} placeholder="New Task..." onChange={(e) => setTask(e.target.value)} />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
        <button>Submit</button>
    </form>
  )
}
