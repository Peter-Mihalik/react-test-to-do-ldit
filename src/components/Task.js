import './styles/task.css'

export default function Task({task, toggleStatus, deleteTask}) {
  return (
    <div className="task">
        <div className="info">
            <h1>{task.title}</h1>
            <p>{task.date}</p>
        </div>

        <div className="btns">
            <div className="checkBox" onClick={() => toggleStatus(task.id)}></div>
            {task.status && (
                <div className="deleteBtn" onClick={() => deleteTask(task.id)}>Delete</div>
            )}
        </div>
    </div>
  )
}
