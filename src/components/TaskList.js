import './styles/taskList.css'
import './Task'

export default function TaskList({tasks}) {
  return (
    <div className='taskList'>
        {tasks.map((task) => (
            <Task task={task}></Task>
        ))}
    </div>
  )
}
