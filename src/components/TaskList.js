import './styles/taskList.css'
import Task from './Task'

export default function TaskList({tasks}) {
  return (
    <div className='taskList'>
        {tasks.map((task, index) => (
            <Task key={index} task={task}></Task>
        ))}
    </div>
  )
}
