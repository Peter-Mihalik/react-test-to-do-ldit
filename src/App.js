import { useState } from "react";
import NewTaskFrom from "./components/NewTaskFrom";
import TaskList from "./components/TaskList";
import './app.css'

function App() {
  const [tasks, setTasks] = useState([{title:'Go to cemetery', date:'6.4. 2022', status:true, id:1}])

  function addTask(task) {
    setTasks((prevTasks) => {
      setTasks([...prevTasks, task])
    })
  }

  function toggleStatus(id) {
    tasks.map((task) => {
      if (task.id == id) {
        const newTasks = tasks.filter((t) => t !== task)
        task.status = !task.status
        setTasks([...newTasks, task])
      }
    })
  }

  return (
    <div className="App">
      <NewTaskFrom addTask={addTask}></NewTaskFrom>
      <div className="taskContainers">

        <TaskList tasks={tasks} state={false} toggleStatus={toggleStatus}>
          <h2>Active Tasks</h2>
        </TaskList>

        <TaskList tasks={tasks} state={true} toggleStatus={toggleStatus}>
          <h2>Completed Tasks</h2>
        </TaskList>
      </div>
    </div>
  );
}

export default App;
