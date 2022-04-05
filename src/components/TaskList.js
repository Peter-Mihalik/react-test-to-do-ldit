import './styles/taskList.css'
import Task from './Task'

export default function TaskList({tasks, children, state}) {
  return (
    <div className='taskList'>
        {children}
        <div className="tasks">
            {tasks.map((task, index) => {
                if (task.status == state) {
                    return (<Task key={index} task={task}></Task>)
                }
            })}
        </div>
    </div>
  )
}
