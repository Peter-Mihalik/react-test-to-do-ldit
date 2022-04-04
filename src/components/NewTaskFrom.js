import { useState } from "react"

export default function NewTaskFrom() {

    const [task, setTask] = useState('')
    const [date, setDate] = useState('')

    function handleSubmit(e) {

        console.log(task, date)
    }

  return (
    <form>
        <input type="text" value={task} placeholder="New Task..." onChange={(e) => setTask(e.target.value)} />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
        <button onSubmit={(e) => {handleSubmit(e)}}>Submit</button>
    </form>
  )
}
