import './styles/taskList.css'
import Task from './Task'

export default function TaskList({tasks, children, state, toggleStatus, deleteTask}) {
  return (
    <div className='taskList'>
        {children}
        <div className="tasks">
            {tasks.map((task, index) => {
                if (task.status === state) {
                    return (<Task key={index} task={task} toggleStatus={toggleStatus} deleteTask={deleteTask}></Task>)
                }
            })}
        </div>
    </div>
  )
}
