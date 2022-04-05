import './styles/task.css'

export default function Task({task}) {
  return (
    <div className="task">
        <div className="info">
            <h1>{task.title}</h1>
            <p>{task.date}</p>
        </div>
        <div className="checkBox"></div>
    </div>
  )
}
