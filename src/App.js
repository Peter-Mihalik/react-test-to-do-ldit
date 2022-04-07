import { useEffect, useState } from "react";
import NewTaskFrom from "./components/NewTaskFrom";
import TaskList from "./components/TaskList";
import './app.css'
import { useFetch } from "./components/hooks/useFetch";

function App() {
  const [tasks, setTasks] = useState([])
  const [url, setUrl] = useState('http://localhost:3000/tasks')

  const {data, isPending } = useFetch(url)

  function addTask(task) {
    setTasks((prevTasks) => {
      setTasks([...prevTasks, task])
    })
  }

  function toggleStatus(id) {
    tasks.map((task) => {
      if (task.id === id) {
        const newTasks = tasks.filter((t) => t !== task)
        task.status = !task.status
        setTasks([...newTasks, task])
      }
    })
  }

  function deleteTask(id) {
    setTasks((prevTasks) => {
      prevTasks = prevTasks.filter((t) => t.id !== id)
      setTasks([...prevTasks])
      console.log(tasks)
    })
  }

  return (
    <div className="App">
      <NewTaskFrom addTask={addTask}></NewTaskFrom>
      <div className="taskContainers">

        <TaskList tasks={tasks} state={false} toggleStatus={toggleStatus} deleteTask={deleteTask}>
          {isPending && (<div>Loading Tasks...</div>)}
          <h2>Active Tasks</h2>
        </TaskList>

        <TaskList tasks={tasks} state={true} toggleStatus={toggleStatus} deleteTask={deleteTask}>
          {isPending && (<div>Loading Tasks...</div>)}
          <h2>Completed Tasks</h2>
        </TaskList>
      </div>
    </div>
  );
}

export default App;
