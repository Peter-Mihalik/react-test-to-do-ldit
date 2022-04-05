import './styles/taskList.css'
import Task from './Task'

export default function TaskList({tasks, children}) {
  return (
    <div className='taskList'>
        {children}
        <div className="tasks">
            {tasks.map((task, index) => (
                <Task key={index} task={task}></Task>
            ))}
        </div>
    </div>
  )
}
