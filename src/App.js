import { useState } from "react";
import NewTaskFrom from "./components/NewTaskFrom";
import TaskList from "./components/TaskList";
import './app.css'

function App() {
  const [tasks, setTasks] = useState([{title:'Go to cemetery', date:'6.4. 2022', status:false, id:1}])

  function addTask(task) {
    setTasks((prevTasks) => {
      setTasks([...prevTasks, task])
    })
  }

  return (
    <div className="App">
      <NewTaskFrom addTask={addTask}></NewTaskFrom>
      <div className="taskContainers">

        <TaskList tasks={tasks} state={false}>
          <h2>Active Tasks</h2>
        </TaskList>

        <TaskList tasks={tasks} state={true}>
          <h2>Completed Tasks</h2>
        </TaskList>
      </div>
    </div>
  );
}

export default App;
