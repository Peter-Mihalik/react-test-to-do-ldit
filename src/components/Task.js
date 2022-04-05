import './styles/task.css'

export default function Task({task, toggleStatus}) {
  return (
    <div className="task">
        <div className="info">
            <h1>{task.title}</h1>
            <p>{task.date}</p>
        </div>

        <div className="btns">
            <div className="checkBox" onClick={() => toggleStatus(task.id)}></div>
            {task.status && (
                <div className="deleteBtn">Delete</div>
            )}
        </div>
    </div>
  )
}
